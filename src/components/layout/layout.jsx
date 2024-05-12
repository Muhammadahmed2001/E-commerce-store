import React from "react";

import Footer from "../footer/footer.jsx";
import Navbar from "../navbar/navbar.jsx";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
