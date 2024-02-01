import * as React from "react";

const TitleLayout = ({ title, children }) => {
  return (
    <div>
      <h2 className="text-pink-500 text-lg uppercase tracking-wider">{title}</h2>
      <div className="min-w-4 min-h-4"></div>
      {children}
    </div>
  );
};

export default TitleLayout;