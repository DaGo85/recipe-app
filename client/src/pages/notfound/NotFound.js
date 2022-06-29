//Not found page

import BackGround from "../../components/background/BackGround";

function NotFound() {
  return (
    <BackGround>
      <div className="h-[60vh]">
        <h1 className="pt-20 text-3xl">
          Something went wrong. Please try again.
        </h1>
      </div>
    </BackGround>
  );
}

export default NotFound;
