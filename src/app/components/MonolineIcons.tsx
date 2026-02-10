import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const ShoppingBagIcon = ({ size = 20, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="square"
    strokeLinejoin="miter"
    {...props}
  >
    <rect x="5" y="7" width="14" height="15" />
    <path d="M9 7V5a3 3 0 0 1 6 0v2" />
  </svg>
);

export const SearchIcon = ({ size = 20, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="square"
    strokeLinejoin="miter"
    {...props}
  >
    <circle cx="10" cy="10" r="7" />
    <line x1="15.5" y1="15.5" x2="21" y2="21" />
  </svg>
);

export const InstagramIcon = ({ size = 20, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="square"
    strokeLinejoin="miter"
    {...props}
  >
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

export const PinterestIcon = ({ size = 20, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="square"
    strokeLinejoin="miter"
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6c2.5 0 4.5 2 4.5 4.5 0 2-1 3.5-2.5 3.5-1 0-1.5-.5-1.5-1.5 0-1.5.5-3 .5-4 0-1-.5-1.5-1.5-1.5-1.5 0-2.5 1.5-2.5 3.5 0 1 .3 1.7.3 1.7s-1 4.3-1.2 5c-.3 1.2-.2 3 0 4" />
  </svg>
);

export const ChevronRightIcon = ({ size = 20, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="square"
    strokeLinejoin="miter"
    {...props}
  >
    <polyline points="9,6 15,12 9,18" />
  </svg>
);

export const ChevronLeftIcon = ({ size = 20, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="square"
    strokeLinejoin="miter"
    {...props}
  >
    <polyline points="15,6 9,12 15,18" />
  </svg>
);
