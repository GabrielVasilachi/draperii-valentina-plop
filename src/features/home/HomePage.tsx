import type { Navigate } from "../../shared/types/navigation";
import { GoogleReviewsSection } from "./sections/BenefitsStrip";
import { EditorialTrustSection } from "./sections/EditorialTrustSection";
import { FeaturedProductsSection } from "./sections/FeaturedProductsSection";
import { HomeContactSection } from "./sections/HomeContactSection";
import { HomeHeroSection } from "./sections/HomeHeroSection";
import { TrustedCompaniesSection } from "./sections/TrustedCompaniesSection";

export function HomePage({ navigate }: { navigate: Navigate }) {
  return (
    <>
      <HomeHeroSection navigate={navigate} />
      <TrustedCompaniesSection navigate={navigate} />
      <FeaturedProductsSection navigate={navigate} />
      <EditorialTrustSection navigate={navigate} />
      <GoogleReviewsSection />
      <HomeContactSection />
    </>
  );
}
