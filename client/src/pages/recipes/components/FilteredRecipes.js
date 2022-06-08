import { Link } from "react-router-dom";

function FilteredRecipes({ currentGridData }) {
  return (
    <section>
      {currentGridData.map((d) => {
        return (
          <Link
            to={`/recipe${d.title}`}
            className="recipe-card cursor-pointer"
            key={d.title}
          >
            <h3 className="font-bold">{d.title}</h3>
            <div className="flex flex-col gap-1">
              <h5>
                created by:
                <br />
                <span className="highlight-gradient">{d.username}</span>
              </h5>
              <h5>
                created at: <br />
                <span className="highlight-gradient">
                  {new Date(d.createdAt).toDateString()}
                </span>
              </h5>
            </div>
            <p className="text-[1.17em] flex flex-wrap gap-1 items-center justify-center">
              {d.tags.map((t) => {
                return (
                  <span
                    key={t}
                    className="text-lg font-bold highlight-gradient"
                  >
                    {t}
                  </span>
                );
              })}
              <span className="py-4 font-bold">
                Difficulty: {d.difficulty}/10
              </span>
            </p>
          </Link>
        );
      })}
    </section>
  );
}

export default FilteredRecipes;
