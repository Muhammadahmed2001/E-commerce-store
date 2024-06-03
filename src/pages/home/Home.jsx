import React from "react";
import Layout from "../../components/layout/layout.jsx";
import { useContext } from "react";
import myContext from "../../context/data/myContext.jsx";
import HeroSection from "../../components/heroSection/HeroSection.jsx";
import Filter from "../../components/filter/Filter.jsx";
import ProductCard from "../../components/productCard/ProductCard.jsx";
import Track from "../../components/track/Track.jsx";
import Testimonial from "../../components/testimonial/Testimonial.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice.jsx";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  const addCart = () => {
    dispatch(addToCart("shirt"));
  };

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  };
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
