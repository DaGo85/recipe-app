//Recipes filter by tags component

import { tagList } from "../../../assets/data";
import RemoveTag from "../../../components/elements/RemoveTag";

function RecipesFilterByTag({ tag, setTag }) {
  return (
    <div>
      <ul className="flex flex-wrap items-center justify-center gap-1">
        {tagList.map((tagM) => (
          <li key={tagM}>
            {tag.includes(tagM) ? (
              <div
                className="group relative border-4 p-2 border-lightOutline dark:border-darkOutline border-double bg-gradient-to-r
                from-primaryLightContainer/75 to-[#bdeeb5] cursor-pointer
                      dark:from-primaryDarkContainer dark:to-[#264d26]"
                key={tagM}
                onClick={() =>
                  setTag((prevTag) => prevTag.filter((f) => f !== tagM))
                }
              >
                <RemoveTag />
                {tagM}
              </div>
            ) : (
              <div
                key={tagM}
                className="p-2 border-4 border-double cursor-pointer border-lightOutline dark:border-darkOutline bg-gradient-to-r dark:from-secondaryDarkContainer/40 dark:to-secondaryDarkContainer"
                onClick={() => setTag((prevTag) => [...prevTag, tagM])}
              >
                {tagM}
              </div>
            )}
          </li>
        ))}
        {tag.length > 0 ? (
          <li
            className="p-2 border-4 border-double cursor-pointer border-lightOutline dark:border-darkOutline bg-gradient-to-r from-errorLight/75 to-errorLight text-errorLightOn dark:from-errorDarkContainer/75 dark:to-errorDarkContainer dark:text-errorDarkContainerOn hover:from-errorLight/50 hover:to-errorLight/70 dark:hover:from-errorDarkContainer/50 dark:hover:to-errorDarkContainer/70"
            onClick={() => setTag([])}
          >
            remove all
          </li>
        ) : (
          <li className="p-2 border-4 border-double border-lightOutline dark:border-darkOutline bg-gradient-to-r from-slate-300 to-slate-300 text-backgroundLightOn">
            remove all
          </li>
        )}
      </ul>
    </div>
  );
}

export default RecipesFilterByTag;
