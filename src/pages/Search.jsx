
import { Search as SearchIcon } from "lucide-react";
import { useMemo, useState } from "react";

import RecipeCard from "@/components/common/RecipeCard";
import { recipes } from "@/data/recipes";

const Search = () => {
  const [query, setQuery] = useState("");

  const filteredRecipes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return recipes;
    }

    return recipes.filter((recipe) => {
      const searchableText = [
        recipe.name,
        recipe.description,
        recipe.category,
        recipe.cuisine,
        recipe.mealType,
        ...(recipe.tags ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [query]);

  const handleRecipeClick = (recipe) => {
    window.location.href = `/recipes/${recipe.id}`;
  };

  return (
    <div className="pb-16">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Find something delicious
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Search recipes
          </h1>

          <p className="mt-3 text-muted-foreground">
            Search by recipe name, cuisine, category, meal type, or tags.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mt-8 max-w-2xl">
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for a recipe..."
            className="h-14 w-full rounded-2xl border border-border bg-card pl-12 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Results */}
        <div className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {filteredRecipes.length}{" "}
              {filteredRecipes.length === 1 ? "recipe" : "recipes"} found
            </p>

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-sm font-medium text-primary hover:text-primary/80"
              >
                Clear search
              </button>
            )}
          </div>

          {filteredRecipes.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClick={handleRecipeClick}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-card/50 px-6 py-16 text-center">
              <SearchIcon className="mx-auto size-10 text-muted-foreground" />

              <h2 className="mt-4 text-xl font-semibold">
                No recipes found
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Try searching for something else.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Search;
