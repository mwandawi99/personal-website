import { cn } from '../../lib/cn';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer select-none',
        {
          'bg-accent text-slate-900 hover:bg-accent-dark shadow-lg shadow-accent/20': variant === 'primary',
          'border border-slate-600 text-slate-300 hover:border-accent hover:text-accent': variant === 'secondary',
        },
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
