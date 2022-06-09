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
                key={tagM}
                className="border-4 p-2 border-lightOutline dark:border-darkOutline border-double bg-gradient-to-r
                     from-primaryLightContainer/75 to-[#bdeeb5] dark:from-primaryDarkContainer/75 dark:to-[#264d26]
                     cursor-not-allowed"
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
                      dark:from-primaryDarkContainer/75 dark:to-[#264d26]
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
                     from-errorLight/75 to-errorLight text-errorLightOn dark:from-primaryDarkContainer/75 dark:to-[#264d26]
                      cursor-crosshair"
            onClick={() => setTag([])}
          >
            remove all
          </li>
        ) : (
          <li
            className="border-4 p-2 border-lightOutline dark:border-darkOutline border-double bg-gradient-to-r
                    from-slate-300 to-slate-300
                      dark:from-primaryDarkContainer/75 dark:to-[#264d26]
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
