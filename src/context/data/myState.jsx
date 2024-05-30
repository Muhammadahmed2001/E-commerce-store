import React, { useEffect, useState } from "react";
import myContext from "./myContext";
import { QuerySnapshot, Timestamp, addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc } from "firebase/firestore";
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
  var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));


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
    ),
    paymentId: randLetter + Date.now(),
  });

  const addProduct = async () => {
    setLoading(false)
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.discription == null) {
      return toast.error("All fields are required")
    }
    try {
      const productRef = collection(fireDB, "products")
      setLoading(true)
      await addDoc(productRef, products)
      toast.success("Add Product Successfully")
      getProductData()
      setTimeout(() => {
        window.location.href = "/dashboard"
      }, 2000);
    }
    catch (err) {
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


  const edithundle = (item) => {
    setProducts(item)
  }

  const updateProduct = async (item) => {
    try {
      await setDoc(doc(fireDB, "products", products.id), products)
      toast.success("Products Update Successfully")
      getProductData()
      setTimeout(() => {
        window.location.href = "/dashboard"
      }, 2000);


    } catch (err) {
      console.log(err)
    }
  }


  const deleteProduct = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "products", item.id))
      toast.success("Products Delete Successfully")
      getProductData()

    } catch (error) {
      console.log(error)
    }

  }


  const [order, setOrder] = useState([])

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "order"))
      const ordersArry = []
      result.forEach((doc) => {
        ordersArry.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArry)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }




  const [user, setUser] = useState([])
  const getUserData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "users"))
      const usersArry = []
      result.forEach((doc) => {
        usersArry.push(doc.data())
        setLoading(false)
      })
      setUser(usersArry)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getOrderData()
    getUserData()
  }, [])

  return (
    <myContext.Provider value={{
      mode, toggleMode, loading, setLoading,
      products, setProducts, addProduct, product,
      edithundle, updateProduct, deleteProduct, order, user
    }}>
      {props.children}
    </myContext.Provider>
  );
}

export default MyState;
