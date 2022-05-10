import { useAuthContext } from "../../utility/AuthContext";

function Home() {
  const { userData } = useAuthContext();

  return (
    <main className="background-setup">
      <h1>Welcome to Reciper</h1>
      <h3>Here you can find and create Gluten- and Sorbitfree recipes!</h3>
      <section className="">Icon/Image for random recipe</section>
      <section className="">Some Statistics</section>
      {userData ? (
        <button>Add a Recipe</button>
      ) : (
        <button>Do you want to add a recipe? Please register here.</button>
      )}
    </main>
  );
}

export default Home;
