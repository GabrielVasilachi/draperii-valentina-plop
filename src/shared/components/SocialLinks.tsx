const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/draperii.valentina.plop",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.2 8.3V6.8c0-.7.5-.9.9-.9h2.3V2.2L14.2 2c-3.6 0-4.4 2.7-4.4 4.4v1.9H7v4.1h2.8V22h4.4v-9.6h3l.5-4.1h-3.5Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/draperiivalentinaplop/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle className="social-icon-dot" cx="17.4" cy="6.7" r="1" />
      </svg>
    ),
  },
] as const;

type SocialLinksProps = {
  className?: string;
  showLabels?: boolean;
};

export function SocialLinks({ className = "", showLabels = false }: SocialLinksProps) {
  return (
    <div className={`social-links ${className}`.trim()} role="group" aria-label="Rețele sociale">
      {socialLinks.map(({ label, href, icon }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
          {icon}
          {showLabels && <span>{label}</span>}
        </a>
      ))}
    </div>
  );
}
