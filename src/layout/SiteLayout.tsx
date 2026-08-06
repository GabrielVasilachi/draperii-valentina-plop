import type { ReactNode } from "react";
import { PhoneIcon } from "../shared/components/PhoneIcon";
import type { Navigate } from "../shared/types/navigation";
import { AnnouncementBar } from "./AnnouncementBar";
import { CategoryNavigation } from "./CategoryNavigation";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type SiteLayoutProps = {
  children: ReactNode;
  path: string;
  navigate: Navigate;
};

export function SiteLayout({ children, path, navigate }: SiteLayoutProps) {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader path={path} navigate={navigate} />
      <CategoryNavigation navigate={navigate} />
      <main>{children}</main>
      <SiteFooter navigate={navigate} />
      <a
        className="floating-call"
        href="tel:+37369212709"
        aria-label="Sună atelierul la +373 69 212 709"
        title="Sună atelierul"
      >
        <PhoneIcon />
      </a>
    </>
  );
}
