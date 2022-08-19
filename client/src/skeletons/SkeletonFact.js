//Loading skeleton for a fact card

import SkeletonIcon from "./SkeletonIcon";
import SkeletonText from "./SkeletonText";

function SkeletonFact() {
  return (
    <div
      className="rounded-card bg-secondaryLightContainer dark:bg-secondaryDarkContainer text-secondaryLightContainerOn dark:text-secondaryDarkContainerOn
    justify-center items-center gap-6 m-2 max-w-[310px] md:max-w-md h-72 w-full flex flex-col p-10"
    >
      <div className="pt-4">
        <SkeletonIcon />
      </div>
      <div className="flex flex-col w-full gap-2">
        <SkeletonText />
        <SkeletonText />
        <SkeletonText />
        <SkeletonText />
      </div>
    </div>
  );
}

export default SkeletonFact;
