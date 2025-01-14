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

        <div className="p-10 text-center">
          <h1 className="text-2xl">Informe seu dados</h1>
          <VisitorForm />
        </div>
        <div className="">
          <BookingForm />
        </div>
        <Footer />
      </main>
    </>
  );
}
