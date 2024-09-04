// app/page.tsx
"use client";

import HeroSection from "@/components/HeroSection/HeroSection";
import Introduction from "@/components/Introduction/Introduction";
import NavigationBar from "@/components/NavBar/NavBar";
import SlideShow from "@/components/SlideShow/SlideShow";
import WhyBuzzvelSection from "@/components/WhyBuzzvelSection/WhyBuzzvelSection";
import Footer from "@/components/Footer/Footer"; // Importando o Footer
import { NextSeo } from "next-seo";
import React from "react";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import Timeline from "@/components/TimelineSection/Timeline";

const Home = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <>
      <NextSeo
        title="Diego Mota Cavalcante - Developer"
        description="Welcome to my microsite! I am a developer focused on creating innovative web experiences."
        canonical={baseUrl}
        openGraph={{
          url: `${baseUrl}`,
          title: "Diego Mota Cavalcante - Developer",
          description:
            "Welcome to my microsite! I am a developer focused on creating innovative web experiences.",

          site_name: "buzzvel-challenge",
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
