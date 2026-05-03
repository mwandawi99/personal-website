import { cn } from '../../lib/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 text-center', className)}>
      <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
      {subtitle && (
        <p className="mt-4 text-slate-400 max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
