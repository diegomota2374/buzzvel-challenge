// app/page.tsx
"use client";

import HeroSection from "@/components/HeroSection/HeroSection";
import Introduction from "@/components/Introduction/Introduction";
import NavigationBar from "@/components/NavBar/NavBar";
import React from "react";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <div className="min-h-screen">
        <Introduction />
        <HeroSection />
      </div>
    </>
  );
};

export default Home;
