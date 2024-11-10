import Arrivals from "@/components/Arrivals/Arrivals";
import Collection from "@/components/Collections/Collections";
import Hero from "@/components/Hero/Hero";
import Offers from "@/components/Offers/Offers";
import Product from "@/components/Products/Products";

import React from "react";



const Home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <Arrivals />
      <Offers />
      <Collection />
    </div>
  );
};

export default Home;
