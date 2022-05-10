function SingleRecipe() {
  return (
    <main className="background-setup">
      <h1>Name of recipe</h1>
      <ul>
        <li>tags</li>
      </ul>
      <ul>
        <li>ingredients</li>
      </ul>
      <section>
        <p>description</p>
      </section>
      <button>delete</button>
      <button>edit</button>
      <div>votecounter</div>
      <button>upvote if logged in</button>
      <section>commentsection if logged in?</section>
    </main>
  );
}

export default SingleRecipe;
