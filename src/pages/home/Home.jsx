import React from "react";
import Layout from "../../components/layout/layout.jsx";
import { useContext } from "react";
import myContext from "../../context/data/myContext.jsx";
import HeroSection from "../../components/heroSection/HeroSection.jsx";
import Filter from "../../components/filter/Filter.jsx";
import ProductCard from "../../components/productCard/ProductCard.jsx";
import Track from "../../components/track/Track.jsx";
import Testimonial from "../../components/testimonial/Testimonial.jsx";

function Home() {
  const contex = useContext(myContext);
  console.log(contex);

  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
