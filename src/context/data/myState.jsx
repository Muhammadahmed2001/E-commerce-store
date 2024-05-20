import React, { useEffect, useState } from "react";
import myContext from "./myContext";
import { QuerySnapshot, Timestamp, addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../../firebase/FirebaseConfig";

function MyState(props) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    discription: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric"
      }
    )
  });

  const addProduct = async () => {
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.discription == null) {
      return toast.error("All fields are required")
    }
    setLoading(true)
    try {
      const productRef = collection(fireDB, "products")
      await addDoc(productRef, products)
      toast.success("Add Product Successfully")
      setTimeout(() => {
        window.location.href = "/dashboard"
      }, 1000);
      getProductData()
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  const [product, setProduct] = useState([])

  const getProductData = () => {
    setLoading(true)

    try {

      const q = query(
        collection(fireDB, "products"),
        orderBy("time")
      )

      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = []
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id })
        })
        setProduct(productArray)
        setLoading(false)
      })


      return () => data;
    } catch (err) {
      setLoading(false)
      console.log(err)

    }
  }


  useEffect(() => {
    getProductData()
  }, [])

  return (
    <myContext.Provider value={{
      mode, toggleMode, loading, setLoading,
      products, setProducts, addProduct, product
    }}>
      {props.children}
    </myContext.Provider>
  );
}

export default MyState;
