import * as React from "react";
import Layout from "../components/layout";
import Recent from "../components/recent";
import Category from "../components/category";
import Popular from "../components/popular";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <main className="relative z-10 pt-16 grid gap-24 grid-cols-[2fr_1fr]">
        <Recent></Recent>
        <div className="grid grid-rows gap-16">
          <Category></Category>
          <Popular></Popular>
        </div>
      </main>
    </Layout>
  );
};

export const Head = () => <Seo title="张理查的海拉鲁" />;

export default IndexPage;
