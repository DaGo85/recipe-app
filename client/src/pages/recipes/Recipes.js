//Recipes page for filtering recipes

import { useEffect, useMemo, useState } from "react";

import { useRecipesContext } from "../../utility/RecipesContext";

import RecipesFilter from "./components/RecipesFilter";
import FilteredRecipes from "./components/FilteredRecipes";
import SkeletonFact from "../../skeletons/SkeletonFact";
import Pagination from "../../components/pagination/Pagination";
import BackGround from "../../components/background/BackGround";

const PageSize = 6;

function Recipes() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({
    difficulty: "all",
    tags: [],
    input: "",
  });
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const { recipesData } = useRecipesContext();

  const currentGridData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredRecipes.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredRecipes]);

  useEffect(() => {
    let saveFilter = recipesData;
    if (filter.difficulty !== "all") {
      let difRange = [];

      switch (filter.difficulty) {
        case "very hard":
          difRange = ["9", "10"];
          break;
        case "hard":
          difRange = ["7", "8"];
          break;
        case "medium":
          difRange = ["5", "6"];
          break;
        case "easy":
          difRange = ["3", "4"];
          break;
        case "very easy":
          difRange = ["1", "2"];
          break;
        default:
          difRange = ["5", "6"];
      }

      saveFilter = saveFilter.filter((sFilter) => {
        return (
          (sFilter.difficulty === difRange[0]) |
          (sFilter.difficulty === difRange[1])
        );
      });
    }

    if (filter.tags.length > 0) {
      const checkArrays = (arr, target) => target.every((v) => arr.includes(v));

      saveFilter = saveFilter.filter((sFilter) => {
        return checkArrays(sFilter.tags, filter.tags);
      });
    }

    if (filter.input.length > 0) {
      const inputFilter = filter.input
        .replace(",", " ")
        .replace(/\s+/g, " ")
        .trim()
        .split(" ");

      const checkTitle = (title) =>
        inputFilter.every((v) =>
          title
            .toLowerCase()
            .replace(",", " ")
            .replace("\n", " ")
            .replace(/\s+/g, " ")
            .trim()
            .split(" ")
            .includes(v)
        );

      const checkDesc = (desc) =>
        inputFilter.every((v) =>
          desc
            .toLowerCase()
            .replace(",", " ")
            .replace("\n", " ")
            .replace(/\s+/g, " ")
            .trim()
            .split(" ")
            .includes(v)
        );

      saveFilter = saveFilter.filter((v) => {
        return checkTitle(v.title) | checkDesc(v.description);
      });
    }

    setFilteredRecipes(saveFilter);
  }, [filter, recipesData]);

  return (
    <BackGround>
      <h1 className="text-3xl">Recipe Search</h1>
      <RecipesFilter setFilter={setFilter} setCurrentPage={setCurrentPage} />
      <Pagination
        currentPage={currentPage}
        totalCount={filteredRecipes.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      {recipesData ? (
        <FilteredRecipes currentGridData={currentGridData} />
      ) : (
        <>
          <SkeletonFact />
          <SkeletonFact />
          <SkeletonFact />
          <SkeletonFact />
          <SkeletonFact />
          <SkeletonFact />
          <SkeletonFact />
          <SkeletonFact />
          <SkeletonFact />
        </>
      )}
      <Pagination
        currentPage={currentPage}
        totalCount={filteredRecipes.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </BackGround>
  );
}

export default Recipes;
