//Loading skeleton for an article

import SkeletonImage from "./SkeletonImage";
import SkeletonText from "./SkeletonText";

function SkeletonArticle() {
  return (
    <div
      className="flex flex-col items-center justify-center w-6/12 gap-10 p-4 m-2 rounded-card bg-secondaryLightContainer dark:bg-secondaryDarkContainer text-secondaryLightContainerOn dark:text-secondaryDarkContainerOn"
    >
      <div className="flex flex-col items-center w-5/6 md:flex-row">
        <SkeletonImage />
        <div className="flex-col hidden w-full gap-10 pl-6 md:flex">
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
        </div>
      </div>
      <div className="flex flex-col items-center w-5/6 gap-10">
        <SkeletonText />
        <SkeletonText />
        <SkeletonText />
        <SkeletonText />
      </div>
    </div>
  );
}

export default SkeletonArticle;
