import { tagList } from "../../../assets/data";

function RecipesFilterByTag({ tag, setTag }) {
  console.log("tags" + tag);
  return (
    <div>
      <ul className="flex flex-wrap gap-1 justify-center items-center">
        {tagList.map((tagM) => (
          <li key={tagM}>
            {tag.includes(tagM) ? (
              <div
                className="border-4 p-2 border-lightOutline dark:border-darkOutline border-double bg-gradient-to-r
                from-primaryLightContainer/75 to-[#bdeeb5]
                      dark:from-primaryDarkContainer dark:to-[#264d26]
                     cursor-not-allowed"
                key={tagM}
                onClick={() =>
                  setTag((prevTag) => prevTag.filter((f) => f !== tagM))
                }
              >
                {tagM}
              </div>
            ) : (
              <div
                key={tagM}
                className="border-4 p-2 border-lightOutline dark:border-darkOutline border-double bg-gradient-to-r
                      dark:from-secondaryDarkContainer/40 dark:to-secondaryDarkContainer
                     cursor-crosshair"
                onClick={() => setTag((prevTag) => [...prevTag, tagM])}
              >
                {tagM}
              </div>
            )}
          </li>
        ))}
        {tag.length > 0 ? (
          <li
            className="border-4 p-2 border-lightOutline dark:border-darkOutline border-double bg-gradient-to-r
                     from-errorLight/75 to-errorLight text-errorLightOn dark:from-errorDarkContainer/75 dark:to-errorDarkContainer dark:text-errorDarkContainerOn
                      cursor-crosshair"
            onClick={() => setTag([])}
          >
            remove all
          </li>
        ) : (
          <li
            className="border-4 p-2 border-lightOutline dark:border-darkOutline border-double bg-gradient-to-r
                    from-slate-300 to-slate-300
                      text-backgroundLightOn
                      cursor-not-allowed"
          >
            remove all
          </li>
        )}
      </ul>
    </div>
  );
}

export default RecipesFilterByTag;
