import * as React from "react";
import { Link } from "gatsby";
import Seo from "./seo";
import TitleLayout from "./titlelayout";

const Category = () => {
  const categories = [
    "React",
    "Animation",
    "CSS",
    "Career",
    "Gatsby",
    "Next.js",
    "Performance",
  ];
  return (
    <TitleLayout title="TOP CATEGORIES">
      <div className="pt-4">
        {categories.map((category) => (
            <Link key={category} className="relative inline-block text-sm text-gray-800 py-1 px-3 mr-2 mb-2" to={`/category/${category}`}>
              <div className="absolute -z-10 w-full h-full bg-blue-200 rounded-lg inset-0 "></div>{category}
            </Link>
        ))}
      </div>
    </TitleLayout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default Category;
