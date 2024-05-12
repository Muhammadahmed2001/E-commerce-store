import React from "react";
import Layout from "../../components/layout/layout.jsx";
import { useContext } from "react";
import myContext from "../../context/data/myContext.jsx";

function Home() {
    const contex = useContext(myContext)
    console.log(contex)

  return (
    <Layout>
 
    
    </Layout>
  );
}

export default Home;
