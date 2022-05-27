import React, { useState } from "react";

function RecipesFilterByTag({ tag, setTag, tagMock, setTagMock }) {
  const [activeTags, setSactiveTags] = useState();

  const activateAll = () => {
    setTag(tagMock);
  };

  const removeAll = () => {
    setTag([]);
  };

  return (
    <div>
      <ul classname="">
        {tagMock.map((tagM) => (
          <>
            {tag.includes(tagM) ? (
              <li
                classname=""
                onClick={() =>
                  setTag((prevTag) => prevTag.filter((f) => f !== tagM))
                }
              >
                {tagM}
              </li>
            ) : (
              <li
                classname=""
                onClick={() => setTag((prevTag) => [...prevTag, tagM])}
              >
                {tagM}
              </li>
            )}
          </>
        ))}
        {tag.length > 0 ? (
          <li classname="" onClick={removeAll}>
            remove all
          </li>
        ) : (
          <li classname="" onClick={activateAll}>
            add all
          </li>
        )}
      </ul>
    </div>
  );
}

export default RecipesFilterByTag;
