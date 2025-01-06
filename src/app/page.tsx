import Catalog from "./components/Catalogys";
import FeaturesSection from "./components/FeatureSection";
import GallerySection from "./components/Gallery";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <FeaturesSection />
        <Catalog />
        <GallerySection />
      </main>
    </>
  );
}
