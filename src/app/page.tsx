// app/page.tsx
"use client";

import ExperienceSection from "@/components/ExperienceItem/ExperienceItem";
import HeroSection from "@/components/HeroSection/HeroSection";
import Introduction from "@/components/Introduction/Introduction";
import NavigationBar from "@/components/NavBar/NavBar";
import WhyBuzzvelSection from "@/components/WhyBuzzvelSection/WhyBuzzvelSection";
import React from "react";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <div className="min-h-screen">
        <Introduction />
        <HeroSection />
        <ExperienceSection />
        <WhyBuzzvelSection />
      </div>
    </>
  );
};

export default Home;
