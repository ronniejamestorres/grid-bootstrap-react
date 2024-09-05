import React from "react";

import HomePageFirstSection from "../components/HomePageFirstSection";
import HomePageSecondSection from "../components/HomePageSecondSection";
import HomePageThirdSection from "../components/HomePageThirdSection";

const HomePage: React.FC = () => {
  return (
    <div className="welcome-page text-center">
      <HomePageFirstSection />
      <HomePageSecondSection />
      <HomePageThirdSection />
    </div>
  );
};

export default HomePage;
