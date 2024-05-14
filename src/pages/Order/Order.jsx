import React, { useContext } from "react";
import Layout from "../../components/layout/layout";
import myContext from "../../context/data/myContext";

function Order() {
  const context = useContext(myContext);
  
  return (
    <div>
      <Layout>
        Order
      </Layout>
    </div>
  );
}

export default Order;
