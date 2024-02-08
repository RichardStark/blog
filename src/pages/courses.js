import * as React from "react";
import SimpleLayout from "../components/s-layout";
import Seo from "../components/seo";
import { Link, graphql } from "gatsby";

const CoursesPage = ({ data }) => {
  return (
    <main>
      <SimpleLayout pageTitle="Courses">
        <main className="w-full pt-16">
          <h1 className="font-bold text-6xl text-center">Online Courses</h1>
          <p className="p-8 text-xl mt-8 mx-auto mb-20 max-w-lg text-center px-0">
            Since 2020, my primary focus has been on creating interactive
            self-paced online courses. Here's what I've produced so far.
          </p>
          <div className="overflow-hidden">
            <svg
              preserveAspectRatio="none"
              width="1440"
              height="74"
              viewBox="0 0 1440 74"
              className="w-full fill-blue-300"
            >
              <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
            </svg>
          </div>
          {data.allMdx.nodes.map((node) => (
            <article key={node.id} className="-mb-1">
              <div className="bg-blue-300">
                <div className="max-w-3xl pt-0 pb-8 relative mx-auto pl-8 pr-8">
                <img alt="Cute cardboard box mascot" src="https://www.joshwcomeau.com/images/css-for-js-mascot-light.png?v=2"
                  className="w-64 h-56 -mt-16 -mr-20 float-right"/>
                  <h2 className="text-3xl">
                    <Link to={`/blog/${node.frontmatter.slug}`}>
                      {node.frontmatter.title}
                    </Link>
                  </h2>
                  <div className="mt-8 leading-7">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus. Pellentesque habitant
                      morbi tristique senectus et netus et malesuada fames ac
                      turpis egestas. Proin pharetra nonummy pede. Mauris et
                      orci. Aenean nec lorem. In porttitor. Donec laoreet
                      nonummy augue. Suspendisse dui purus, scelerisque at,
                      vulputate vitae, pretium mattis, nunc. Mauris eget neque
                      at sem venenatis eleifend. Ut nonummy.
                    </p>
                  </div>
                </div>
              </div>
              <div class="sc-f37ea003-14 drzVpJ">
                <svg
                  viewBox="0 0 1433 176"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  class="sc-f37ea003-15 sc-f37ea003-17 iqcpxh fOXOfW"
                  className="w-full fill-blue-300"
                >
                  <path d="M0 93V0H1433C1433 0 1220.5 103.5 1111 103.5C872.927 103.5 805.531 18.0095 567.5 22.5C344.214 26.7124 0 93 0 93Z"></path>
                  <path d="M638 40C394.315 26.0653 1.5 123.5 1.5 123.5V175.5H1433V51.5C1433 51.5 1177.5 136.5 1036.5 123.5C847.439 106.069 827.553 50.8392 638 40Z"></path>
                </svg>
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

export const Head = () => <Seo title="Courses" />;

export default CoursesPage;
