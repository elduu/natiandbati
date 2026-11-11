import type { SVGProps } from "react";

/** Small inline icon set — keeps the app free of an icon-library dependency. */
type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 24, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const CloseIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Icon>
);

export const MenuIcon = (p: IconProps) => (
  <Icon strokeWidth={1.6} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);

export const ChevronLeftIcon = (p: IconProps) => (
  <Icon strokeWidth={1.3} {...p}>
    <path d="M15 18l-6-6 6-6" />
  </Icon>
);

export const ChevronRightIcon = (p: IconProps) => (
  <Icon strokeWidth={1.3} {...p}>
    <path d="M9 18l6-6-6-6" />
  </Icon>
);

export const ArrowDownIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </Icon>
);

export const ZoomInIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
  </Icon>
);

export const MusicIcon = (p: IconProps) => (
  <Icon strokeWidth={1.6} {...p}>
    <path d="M9 18V5l10-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="16" cy="16" r="3" />
  </Icon>
);

export const MailOpenIcon = (p: IconProps) => (
  <Icon strokeWidth={2} {...p}>
    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
  </Icon>
);

export const PlayIcon = (p: IconProps) => (
  <Icon fill="currentColor" stroke="none" {...p}>
    <path d="M8 5v14l11-7z" />
  </Icon>
);
