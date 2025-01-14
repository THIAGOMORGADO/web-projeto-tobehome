import BookingForm from "./components/BookingForm";
import Catalog from "./components/Catalogys";
import FeaturesSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import GallerySection from "./components/Gallery";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import VisitorForm from "./LandingPage/components/VisitorForm";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <FeaturesSection />
        <Catalog />
        <GallerySection />
        <div className="flex ">
          <div className="p-10 text-center w-[50%]">
            <h1 className="text-2xl">Informe seu dados</h1>
            <VisitorForm />
          </div>
          <div className="w-[50%]">
            <BookingForm />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
