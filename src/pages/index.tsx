// app/page.tsx
"use client";

import HeroSection from "@/components/HeroSection/HeroSection";
import Introduction from "@/components/Introduction/Introduction";
import NavigationBar from "@/components/NavBar/NavBar";
import SlideShow from "@/components/SlideShow/SlideShow";
import WhyBuzzvelSection from "@/components/WhyBuzzvelSection/WhyBuzzvelSection";
import Footer from "@/components/Footer/Footer"; // Importando o Footer
import React from "react";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import Timeline from "@/components/TimelineSection/Timeline";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <div className="min-h-screen">
        <Introduction />
        <HeroSection />
        <ExperienceSection />
        <WhyBuzzvelSection />
        <SlideShow />
        <Timeline />
      </div>
      <Footer />
    </>
  );
};

export default Home;
