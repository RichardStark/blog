import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Menu from "./menu";
import Footer from "../components/footer";


const Layout = ({ pageTitle, children }) => {
  return (
    <div className=" font-sans ">
      <div className="h-96 relative bg-gradient-to-r from-blue-300 to-blue-500">
        <div className="min-h-9 min-w-9"></div>
        <Menu />
        <div className="overflow-hidden absolute block bottom-0 left-0 right-0 w-full">
          <svg
            preserveAspectRatio="none"
            width="1440"
            height="74"
            viewBox="0 0 1440 74"
            className="w-full"
          >
            <path
              className="fill-white"
              d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"
            ></path>
          </svg>
        </div>
        <div className="absolute left-3/4 top-44">
          <div className="duration-700 delay-200">
            <StaticImage
              className="relative opacity-1 top-0 left-0 pointer-events-none w-40"
              alt="me"
              src="../images/me-light.png"
            />
          </div>
        </div>
      </div>
      <main className="w-full max-w-screen-lg min-h-screen mx-auto px-8">
        <h1 className="main-title">{pageTitle}</h1>
        {children}
      </main>
      <Footer bgColor='bg-blue-400'></Footer>
    </div>
  );
};

export default Layout;
