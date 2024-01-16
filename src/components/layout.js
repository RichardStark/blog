import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="m-auto max-w-lg font-sans">
      <header className="text-5xl text-gray-600 font-bold m-12 mx-0">
        {data.site.siteMetadata.title}
      </header>
      <nav>
        <ul className="flex pl-0">
          <li className="pr-8">
            <Link to="/" className="text-black underline">
              Home
            </Link>
          </li>
          <li className="pr-8">
            <Link to="/about" className="text-black underline">
              About
            </Link>
          </li>
          <li className="pr-8">
            <Link to="/blog" className="text-black underline">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="text-violet-600 text-3xl my-6">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
