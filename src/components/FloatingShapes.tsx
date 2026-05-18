import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ShapeConfig {
  id: number;
  type: 'triangle' | 'circle' | 'diamond' | 'hexagon' | 'square';
  isLeft: boolean;
  delay: number;
  duration: number;
  position: { x: number; y: number };
}

interface ShapeForce {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const SHAPE_TYPES = ['triangle', 'circle', 'diamond', 'hexagon', 'square'] as const;

export function FloatingShapes() {
  const shapeRefsMap = useRef<Map<number, HTMLDivElement>>(new Map());
  const [shapeForces, setShapeForces] = useState<Map<number, ShapeForce>>(new Map());
  const velocitiesRef = useRef<Map<number, { vx: number; vy: number }>>(new Map());
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Generate random number of shapes (3-5 on each side)
  const shapeCount = Math.floor(Math.random() * 3) + 3;

  const generateShapes = (): ShapeConfig[] => {
    const shapes: ShapeConfig[] = [];
    const durations = [20, 22, 24, 26, 28];

    for (let i = 0; i < shapeCount; i++) {
      const randomTop = Math.random() * 60 + 20;
      const isLeft = i % 2 === 0;
      const xPos = isLeft ? window.innerWidth * 0.01 : window.innerWidth * 0.99;

      shapes.push({
        id: i,
        type: SHAPE_TYPES[i % SHAPE_TYPES.length],
        isLeft,
        delay: i,
        duration: durations[i % durations.length],
        position: { x: xPos, y: window.innerHeight * (randomTop / 100) },
      });

      // Initialize velocities
      velocitiesRef.current.set(i, { vx: 0, vy: 0 });
    }
    return shapes;
  };

  const [shapes] = useState<ShapeConfig[]>(generateShapes());

  // Physics simulation loop
  useEffect(() => {
    const simulate = () => {
      const forces = new Map(shapeForces);
      const velocities = velocitiesRef.current;

      shapes.forEach((shape) => {
        const force = forces.get(shape.id) || { x: 0, y: 0, vx: 0, vy: 0 };
        const vel = velocities.get(shape.id) || { vx: 0, vy: 0 };

        // Apply damping (friction)
        const damping = 0.92;
        vel.vx *= damping;
        vel.vy *= damping;

        // Apply forces as acceleration
        vel.vx += force.x * 0.02;
        vel.vy += force.y * 0.02;

        // Clamp velocity to prevent excessive speeds
        const maxVel = 50;
        vel.vx = Math.max(-maxVel, Math.min(maxVel, vel.vx));
        vel.vy = Math.max(-maxVel, Math.min(maxVel, vel.vy));

        // Reset forces after applying (only apply once per frame) and store velocity
        forces.set(shape.id, { x: 0, y: 0, vx: vel.vx, vy: vel.vy });
        velocities.set(shape.id, vel);
      });

      setShapeForces(forces);
      animationFrameRef.current = requestAnimationFrame(simulate);
    };

    animationFrameRef.current = requestAnimationFrame(simulate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [shapes]);

  // Mouse move for gentle repulsion
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      shapes.forEach((shape) => {
        const shapeEl = shapeRefsMap.current.get(shape.id);
        if (!shapeEl) return;

        const rect = shapeEl.getBoundingClientRect();
        const shapeCenterX = rect.left + rect.width / 2;
        const shapeCenterY = rect.top + rect.height / 2;

        const dx = shapeCenterX - e.clientX;
        const dy = shapeCenterY - e.clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const repelDistance = 150;
        const repelStrength = Math.max(0, (repelDistance - distance) / repelDistance) * 8;

        if (repelStrength > 0) {
          const angle = Math.atan2(dy, dx);
          const forceX = Math.cos(angle) * repelStrength;
          const forceY = Math.sin(angle) * repelStrength;

          setShapeForces((prev) => {
            const newForces = new Map(prev);
            const existing = newForces.get(shape.id) || { x: 0, y: 0, vx: 0, vy: 0 };
            newForces.set(shape.id, { ...existing, x: forceX, y: forceY });
            return newForces;
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shapes]);

  // Click handler to push shapes
  const handleShapeClick = (shapeId: number, e: React.MouseEvent) => {
    e.stopPropagation();

    const shapeEl = shapeRefsMap.current.get(shapeId);
    if (!shapeEl) return;

    const rect = shapeEl.getBoundingClientRect();
    const shapeCenterX = rect.left + rect.width / 2;
    const shapeCenterY = rect.top + rect.height / 2;

    const dx = shapeCenterX - e.clientX;
    const dy = shapeCenterY - e.clientY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 1) {
      // Click was exactly on center, push in random direction
      const angle = Math.random() * Math.PI * 2;
      const vel = velocitiesRef.current.get(shapeId) || { vx: 0, vy: 0 };
      vel.vx = Math.cos(angle) * 40;
      vel.vy = Math.sin(angle) * 40;
      velocitiesRef.current.set(shapeId, vel);
    } else {
      // Push away from click point
      const angle = Math.atan2(dy, dx);
      const vel = velocitiesRef.current.get(shapeId) || { vx: 0, vy: 0 };
      vel.vx = Math.cos(angle) * 40;
      vel.vy = Math.sin(angle) * 40;
      velocitiesRef.current.set(shapeId, vel);
    }
  };

  const getShapePosition = (shape: ShapeConfig) => {
    const topPercent = (shape.position.y / window.innerHeight) * 100;
    return shape.isLeft ? { left: '1%', top: `${topPercent}%` } : { right: '1%', top: `${topPercent}%` };
  };

  const renderShape = (shape: ShapeConfig, position: any) => {
    const force = shapeForces.get(shape.id) ?? { x: 0, y: 0, vx: 0, vy: 0 };

    const yAnimations = {
      triangle: [0, -50, 0],
      circle: [0, -30, 0],
      diamond: [0, 45, 0],
      hexagon: [0, -35, 0],
      square: [0, 40, 0],
    };

    const rotateAnimations = {
      triangle: [0, 180, 360],
      circle: undefined,
      diamond: [0, 90, 180, 270, 360],
      hexagon: [0, 60, 120, 180, 240, 300, 360],
      square: [0, 90, 180, 270, 360],
    };

    return (
      <motion.div
        key={shape.id}
        ref={(el) => {
          if (el) shapeRefsMap.current.set(shape.id, el);
        }}
        className="absolute opacity-[0.25] cursor-pointer hover:opacity-[0.35] transition-opacity"
        animate={{
          y: yAnimations[shape.type],
          x: force.vx,
          ...(rotateAnimations[shape.type] && { rotate: rotateAnimations[shape.type] }),
        }}
        transition={{
          y: {
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay * 0.5,
          },
          x: { duration: 0.4, ease: 'easeOut' },
          ...(rotateAnimations[shape.type] && {
            rotate: {
              duration: shape.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: shape.delay * 0.5,
            },
          }),
        }}
        style={position}
        onClick={(e) => handleShapeClick(shape.id, e)}
      >
        {shape.type === 'triangle' && (
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <polygon points="60,15 105,100 15,100" stroke="#06b6d4" strokeWidth="1" fill="none" />
          </svg>
        )}
        {shape.type === 'circle' && (
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" stroke="#06b6d4" strokeWidth="0.8" />
          </svg>
        )}
        {shape.type === 'diamond' && (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <polygon points="40,10 70,40 40,70 10,40" stroke="#06b6d4" strokeWidth="0.8" fill="none" />
          </svg>
        )}
        {shape.type === 'hexagon' && (
          <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
            <polygon points="55,10 95,35 95,85 55,110 15,85 15,35" stroke="#0891b2" strokeWidth="1" fill="none" />
          </svg>
        )}
        {shape.type === 'square' && (
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <rect x="10" y="10" width="80" height="80" stroke="#06b6d4" strokeWidth="1" fill="none" />
          </svg>
        )}
      </motion.div>
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {shapes.map((shape) => renderShape(shape, getShapePosition(shape)))}
    </div>
  );
}
