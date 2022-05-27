import { useEffect, useMemo, useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import { useRecipesContext } from "../../utility/RecipesContext";
import RecipesFilter from "./components/RecipesFilter";
import RecipeTable from "./components/RecipeTable";

const PageSize = 9;

function Recipes() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({
    difficulty: "all",
    tags: [],
    input: "",
  });
  const [filteredRecipes, setFilteredRecipes] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const { recipesData } = useRecipesContext();

  const currentGridData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredRecipes.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredRecipes]);

  useEffect(() => {
    setFilteredRecipes(recipesData);
  }, [filter]);

  return (
    <main className="background-setup">
      <section className="">Filter Section</section>
      <RecipesFilter filter={filter} setFilter={setFilter} />
      <Pagination
        currentPage={currentPage}
        totalCount={filteredRecipes.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <RecipeTable currentGridData={currentGridData} />
      <Pagination
        currentPage={currentPage}
        totalCount={filteredRecipes.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </main>
  );
}

export default Recipes;
