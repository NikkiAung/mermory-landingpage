import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CallToActionSection from "./components/CallToActionSection";
import FeaturesSection from "./components/FeaturesSection";
import AdvertiseSection from "./components/AdvertiseSection";
import FlashCardSection from "./components/FlashCardSection";
import StudyModesSection from "./components/StudyModesSection";
import DecksSection from "./components/DecksSection";
import AiTutorSection from "./components/AiTutorSection";
import Footer from "./components/Footer";

function LandingPage() {
  return (
    <main className="font-figtree">
      <Header />
      <main>
        <HeroSection />
        <CallToActionSection />
        <FeaturesSection />
        <AdvertiseSection />
        <FlashCardSection />
        <StudyModesSection />
        <DecksSection />
        <AiTutorSection />
      </main>
      <Footer />
    </main>
  );
}

export default LandingPage;
