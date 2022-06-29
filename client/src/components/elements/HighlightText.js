//Highlighted text element

function HighlightText({ text, added }) {
  return (
    <span
      className={`bg-gradient-to-r from-primaryLightContainer/75 to-[#bdeeb5]
    dark:from-primaryDarkContainer/75 dark:to-[#264d26] rounded-xl pt-0 pr-4 pb-0 pl-2 ${added}`}
    >
      {text}
    </span>
  );
}

export default HighlightText;
