import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import TitleLayout from "./titlelayout";
import Seo from "./seo";

const Recent = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            slug
          }
          id
          excerpt
        }
      }
    }
  `);

  return (
    <TitleLayout title='Recently Published'>
      <div>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id} className="mb-12">
            <h2 className="text-blue-600 no-underline text-2xl mt-4">
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p className="text-gray-400">{node.frontmatter.date}</p>
            <p className="mt-4">{node.excerpt}</p>
          </article>
        ))}
      </div>
    </TitleLayout>
  );
};

export const Head = () => <Seo title="My Blog Posts"/>;

export default Recent;
