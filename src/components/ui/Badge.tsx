import { cn } from '../../lib/cn';

interface BadgeProps {
  label: string;
  variant?: 'accent' | 'muted' | 'ghost';
  className?: string;
}

export function Badge({ label, variant = 'ghost', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium font-mono tracking-wide',
        {
          'bg-accent/10 text-accent border border-accent/20': variant === 'accent',
          'bg-slate-700/50 text-slate-300 border border-slate-600/50': variant === 'muted',
          'bg-slate-800 text-slate-400 border border-slate-700': variant === 'ghost',
        },
        className
      )}
    >
      {label}
    </span>
  );
}
