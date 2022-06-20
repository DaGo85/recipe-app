import React from "react";
import SkeletonImage from "./SkeletonImage";
import SkeletonText from "./SkeletonText";

function SkeletonArticle() {
  return (
    <div className="recipe-card w-11/12 gap-10">
      <div className="flex w-5/6 flex-col md:flex-row items-center">
        <SkeletonImage />
        <div className="hidden w-full md:flex flex-col gap-10 pl-6">
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
        </div>
      </div>
      <div className="flex flex-col w-5/6 gap-10 items-center">
        <SkeletonText />
        <SkeletonText />
        <SkeletonText />
        <SkeletonText />
      </div>
    </div>
  );
}

export default SkeletonArticle;
