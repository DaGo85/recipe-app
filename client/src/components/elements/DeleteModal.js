// DeleteModal for conformation to delete a recipe

function DeleteModal({ handleDelete, showModal, setShowModal }) {
  return (
    <div
      className={`${
        showModal ? "block" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed bottom-50 right-50 left-50 top-[20rem] z-50 md:inset-50 h-modal md:h-full `}
    >
      <div className="relative w-full h-full max-w-md p-4 md:h-auto bg-errorLightContainer dark:bg-errorDarkContainer">
        <div className="relative rounded-lg shadow bg-a">
          <div className="flex justify-end p-2">
            <button
              onClick={() => {
                setShowModal(false);
              }}
              type="button"
              className="text-errorLightContainerOn dark:text-errorDarkContainerOn bg-transparent hover:bg-b hover:text-slate-100 rounded-2xl p-1.5 ml-auto inline-flex items-center"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
            </button>
          </div>
          <div className="p-6 pt-0 text-center">
            <svg
              className="mx-auto mb-4 w-14 h-14 text-errorLightContainerOn dark:text-errorDarkContainerOn"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-errorLightContainerOn dark:text-errorDarkContainerOn">
              Do you really want to delete this recipe?
            </h3>
            <button
              onClick={() => {
                handleDelete();
                setShowModal(false);
              }}
              type="button"
              className="text-errorLightOn dark:text-errorDarkOn bg-errorLight hover:bg-errorLight/70 dark:bg-errorDark dark:hover:bg-errorDark/70 focus:ring-4 focus:outline-none focus:ring-serror/60 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 mb-2"
            >
              Yes, i am sure!
            </button>
            <button
              onClick={() => {
                setShowModal(false);
              }}
              type="button"
              className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
            >
              No, cancel!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
