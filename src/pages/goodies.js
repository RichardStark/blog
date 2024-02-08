import * as React from "react";
import SimpleLayout from "../components/s-layout";
import Seo from "../components/seo";
import { Link, graphql } from "gatsby";

const GoodiesPage = ({ data }) => {
  return (
    <main>
      <SimpleLayout pageTitle="Goodies">
        <main className="w-full mx-auto px-8 max-w-5xl pt-16">
          <h1 className="font-bold text-6xl text-center">Bonus Goodies</h1>
          <div className="min-h-16 min-w-16"></div>

          {data.allMdx.nodes.map((node) => (
            <article key={node.id} className="flex mb-16">
              <div className="mr-8">
                <div className="block w-80 h-40 ">hhh</div>
              </div>
              <div className="flex-1">
                <h2 className="text-violet-600 text-2xl mb-4">
                  <Link to={`/blog/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <div className="m-0 leading-7">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Maecenas porttitor congue massa. Fusce posuere, magna sed
                    pulvinar ultricies, purus lectus malesuada libero, sit amet
                    commodo magna eros quis urna. Nunc viverra imperdiet enim.
                    Fusce est. Vivamus a tellus. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean
                    nec lorem. In porttitor. Donec laoreet nonummy augue.
                    Suspendisse dui purus, scelerisque at, vulputate vitae,
                    pretium mattis, nunc. Mauris eget neque at sem venenatis
                    eleifend. Ut nonummy.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </main>
      </SimpleLayout>
    </main>
  );
};

export const query = graphql`
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
`;

export const Head = () => <Seo title="Goodies" />;

export default GoodiesPage;
