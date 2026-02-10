import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'secondary';
  className?: string;
}

const variantStyles = {
  primary: 'bg-primary text-white',
  success: 'bg-success text-white',
  secondary: 'bg-gray text-white',
};

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  return (
    <span className={cn('inline-block rounded-full px-3 py-1 text-sm font-medium', variantStyles[variant], className)}>
      {children}
    </span>
  );
}
