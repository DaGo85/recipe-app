function DeleteImage({ handleDeleteImg, i }) {
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-slate-900/70">
      <svg
        aria-label="delete image"
        onClick={() => {
          handleDeleteImg(i);
        }}
        className="duration-300 cursor-pointer h-1/3 opacity-70 fill-slate-100 hover:opacity-100 hover:fill-red-400 transition-color"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" />
      </svg>
    </div>
  );
}

export default DeleteImage;
