import { ButtonHTMLAttributes, forwardRef } from 'react';

interface GhostButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const GhostButton = forwardRef<HTMLButtonElement, GhostButtonProps>(
  ({ children, variant = 'primary', className = '', ...props }, ref) => {
    if (variant === 'secondary') {
      return (
        <button
          ref={ref}
          className={`
            relative inline-block
            font-sans text-[12px] font-medium tracking-[2px] uppercase
            text-[#2B2B2B]
            bg-transparent
            underline decoration-1 underline-offset-4
            transition-all duration-200
            hover:decoration-2 hover:text-[#C75B3A]
            active:scale-95
            ${className}
          `}
          style={{ fontFamily: 'var(--font-sans)' }}
          {...props}
        >
          {children}
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={`
          px-8 py-3
          font-sans text-[12px] font-semibold tracking-[2px] uppercase
          text-white
          bg-[#2B2B2B]
          border border-[#2B2B2B]
          rounded-[4px]
          transition-all duration-200
          hover:bg-[#C75B3A] hover:border-[#C75B3A]
          active:scale-95
          ${className}
        `}
        style={{ fontFamily: 'var(--font-sans)' }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GhostButton.displayName = 'GhostButton';