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
      <ul className="">
        {tagMock.map((tagM) => (
          <li key={tagM}>
            {tag.includes(tagM) ? (
              <div
                key={tagM}
                className=""
                onClick={() =>
                  setTag((prevTag) => prevTag.filter((f) => f !== tagM))
                }
              >
                {tagM}
              </div>
            ) : (
              <div
                key={tagM}
                className=""
                onClick={() => setTag((prevTag) => [...prevTag, tagM])}
              >
                {tagM}
              </div>
            )}
          </li>
        ))}
        {tag.length > 0 ? (
          <li className="" onClick={removeAll}>
            remove all
          </li>
        ) : (
          <li className="" onClick={activateAll}>
            add all
          </li>
        )}
      </ul>
    </div>
  );
}

export default RecipesFilterByTag;
