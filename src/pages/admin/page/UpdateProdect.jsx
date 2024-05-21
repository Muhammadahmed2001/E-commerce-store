import React, { useContext } from "react";
import myContext from "../../../context/data/myContext";

function UpdateProdect() {
  const context = useContext(myContext)
  const { products, setProducts, updateProduct , loading } = context
  return (
    <div>
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-gray-800 px-10 py-50 rounded-xl ">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Update Product
            </h1>
          </div>
          <div>
            <input
              value={products.title}
              onChange={(e) => setProducts({ ...products, title: e.target.value })}
              type="text"
              name="title"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product title"
            />
          </div>
          <div>
            <input
              value={products.price}
              onChange={(e) => setProducts({ ...products, price: e.target.value })}
              type="text"
              name="price"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product price"
            />
          </div>
          <div>
            <input
              value={products.imageUrl}
              onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
              type="text"
              name="imageurl"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product imageUrl"
            />
          </div>
          <div>
            <input
            value={products.category}
            onChange={(e) => setProducts({...products, category : e.target.value })}
              type="text"
              name="category"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
            value={products.discription}
            onChange={(e) => setProducts({...products, discription : e.target.value})}
              cols="30"
              rows="10"
              name="discription"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product discription"
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button onClick={updateProduct} className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg">
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProdect;
