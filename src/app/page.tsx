// app/page.tsx
"use client";

import HeroSection from "@/components/HeroSection/HeroSection";
import Introduction from "@/components/Introduction/Introduction";
import NavigationBar from "@/components/NavBar/NavBar";
import SlideShow from "@/components/SlideShow/SlideShow";
import Timeline from "@/components/TimeLine/TimeLine";
import WhyBuzzvelSection from "@/components/WhyBuzzvelSection/WhyBuzzvelSection";
import Footer from "@/components/Footer/Footer"; // Importando o Footer
import { NextSeo } from "next-seo";
import React from "react";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";

const Home = () => {
  return (
    <>
      <NextSeo
        title="Buzzvel Projects - Interactive Showcase"
        description="Explore our Buzzvel projects with interactive slides showcasing our innovative solutions."
        openGraph={{
          title: "Buzzvel Projects - Interactive Showcase",
          description:
            "Explore our Buzzvel projects with interactive slides showcasing our innovative solutions.",
          images: [
            {
              url: "https://www.yourwebsite.com/og-image.jpg",
              width: 800,
              height: 600,
              alt: "Buzzvel Project",
            },
          ],
        }}
      />
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
