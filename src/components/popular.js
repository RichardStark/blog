import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Seo from "./seo";

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
  console.log(data)

  return (
    <div>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2 className="text-violet-600  underline text-3xl my-4">
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </div>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default Popular;
