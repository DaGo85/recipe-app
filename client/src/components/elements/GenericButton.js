//Button used on several pages

function GenericButton({ text, handler, added, type, disabled }) {
  return (
    <button
      disabled={disabled ? disabled : false}
      type={type}
      className={`${added} border px-4 py-2 rounded-2xl bg-primaryLight dark:bg-primaryDark
     text-primaryLightOn dark:text-primaryDarkOn 
     hover:bg-primaryLight/60 dark:hover:bg-primaryDark/60`}
      onClick={(e) => handler(e)}
    >
      {text}
    </button>
  );
}

export default GenericButton;
