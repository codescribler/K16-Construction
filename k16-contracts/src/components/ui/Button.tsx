import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'outline-primary' | 'outline-light' | 'light' | 'cta';
type ButtonSize = 'default' | 'lg' | 'sm';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white border-primary hover:bg-primary-dark hover:border-primary-dark hover:shadow-md',
  'outline-primary':
    'bg-transparent text-primary border-primary hover:bg-primary hover:text-white',
  'outline-light':
    'bg-transparent text-white border-white hover:bg-white hover:text-primary',
  light:
    'bg-white text-primary border-white hover:bg-light',
  cta:
    'bg-secondary text-white border-secondary hover:bg-secondary-dark hover:border-secondary-dark hover:shadow-[0_4px_12px_rgba(237,137,54,0.35)]',
};

const sizeStyles: Record<ButtonSize, string> = {
  default: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  sm: 'px-4 py-2 text-sm',
};

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  className,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    'inline-block rounded-md border-2 font-primary font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center',
    variantStyles[variant],
    sizeStyles[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
