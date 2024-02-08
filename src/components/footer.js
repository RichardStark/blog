import * as React from "react";

const footer = ({ bgColor }) => {
  return (
    <footer className={`${bgColor} relative bottom-0`}>
      <div className="flex justify-between pt-8 pb-8 relative w-full max-w-6xl mx-auto px-24">
        <div className="flex flex-col justify-between items-start">
          <div>
            <div>Banner</div>
            <div className="mt-2 font-medium text-sm">Thanks for reading!</div>
          </div>
          <span className="text-xs text-gray-700">
            2024-present Richard Zhang.All Rights Reserved.
          </span>
        </div>
        <div className="flex">
          <div className="ml-24 pt-2">
            <p className="text-sm">Tutorials</p>
            <div className="grid w-48 pt-3 gap-2 grid-cols-2">
              <div className="text-sm">React</div>
              <div className="text-sm">CSS</div>
              <div className="text-sm">Gatsby</div>
              <div className="text-sm">Performance</div>
              <div className="text-sm">Animation</div>
              <div className="text-sm">Career</div>
              <div className="text-sm">Next.js</div>
              <div className="text-sm">JavaScript</div>
            </div>
          </div>
          <div className="ml-24 pt-2">
            <p className="text-sm">Links</p>
            <div className="grid w-48 pt-3 gap-2 grid-cols-1">
              <div className="text-sm">Twitter</div>
              <div className="text-sm">Contact</div>
              <div className="text-sm">Terms of Use</div>
              <div className="text-sm">Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
