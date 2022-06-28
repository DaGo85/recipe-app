import Background from "../../components/background/BackGround";

function NotFound() {
  return (
    <Background>
      <div className="h-[60vh]">
        <h1 className="pt-20 text-3xl">
          Something went wrong. Please try again.
        </h1>
      </div>
    </Background>
  );
}

export default NotFound;
