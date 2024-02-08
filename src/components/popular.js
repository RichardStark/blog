import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Seo from "./seo";
import TitleLayout from "./titlelayout";

const Popular = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            slug
          }
          id
        }
      }
    }
  `);

  return (
    <TitleLayout title="Popular Content">
      <div className="-ml-8 pt-8">
        <ul className="mb-8 list-none">
          {data.allMdx.nodes.map((node) => (
            <li  key={node.id} className="mb-4 flex items-start">
              <span className="flex items-center pr-4 pt-0 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
              <div className="grow shrink basis-0 font-medium leading-4 text-xl">
                <Link className="block no-underline" to={`/blog/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </TitleLayout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default Popular;
