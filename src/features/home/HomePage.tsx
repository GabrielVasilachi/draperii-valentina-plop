import type { Navigate } from "../../shared/types/navigation";
import { AtelierStorySection } from "./sections/AtelierStorySection";
import { BenefitsStrip } from "./sections/BenefitsStrip";
import { CategoryShopSection } from "./sections/CategoryShopSection";
import { ConsultationBanner } from "./sections/ConsultationBanner";
import { FeaturedProductsSection } from "./sections/FeaturedProductsSection";
import { HomeHeroSection } from "./sections/HomeHeroSection";
import { TrustedCompaniesSection } from "./sections/TrustedCompaniesSection";

export function HomePage({ navigate }: { navigate: Navigate }) {
  return (
    <>
      <HomeHeroSection navigate={navigate} />
      <BenefitsStrip />
      <CategoryShopSection navigate={navigate} />
      <FeaturedProductsSection navigate={navigate} />
      <AtelierStorySection navigate={navigate} />
      <TrustedCompaniesSection />
      <ConsultationBanner navigate={navigate} />
    </>
  );
}
