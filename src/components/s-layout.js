import * as React from "react";
import Menu from "./menu";
import Footer from "../components/footer";

const SimpleLayout = ({ pageTitle, children }) => {
  return (
    <div className=" font-sans">
      <div className="sticky -top-1 bg-white z-10">
        <Menu />
      </div>
        {children}
        <Footer></Footer>
    </div>
  );
};

export default SimpleLayout;
