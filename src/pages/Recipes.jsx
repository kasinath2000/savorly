
import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Filter,
  RotateCcw,
  SlidersHorizontal,
  ChefHat,
  AlertCircle,
} from "lucide-react";

import RecipeCard from "@/components/common/RecipeCard";
import SectionHeader from "@/components/common/SectionHeader";
import { categories } from "@/data/categories";
import { useGetRecipesQuery } from "@/redux/recipesApi";

const Recipes = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const {
    data: recipes = [],
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useGetRecipesQuery();

  const selectedCategory = searchParams.get("category") || "";

  const selectedCategoryData = categories.find(
    (category) => category.id === selectedCategory
  );

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      return (
        !selectedCategory ||
        String(recipe.category || "").toLowerCase() ===
          selectedCategory.toLowerCase()
      );
    });
  }, [recipes, selectedCategory]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    const queryString = params.toString();

    navigate(queryString ? `/recipes?${queryString}` : "/recipes");
  };

  const clearFilters = () => {
    navigate("/recipes");
  };

  const handleRecipeClick = (recipe) => {
    navigate(`/recipes/${recipe.id}`);
  };

  const pageTitle = selectedCategoryData?.name || "Explore recipes";

  const pageDescription =
    selectedCategoryData?.description ||
    "Discover delicious recipes by category. Find something tasty for your next meal.";

  if (isLoading) {
    return <RecipesLoading />;
  }

  if (isError && recipes.length === 0) {
    return (
      <RecipesError
        message={
          error?.data?.message ||
          error?.error ||
          error?.message ||
          "Unable to load recipes. Please check your connection and try again."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <div className="min-h-screen pb-16">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <SectionHeader
          eyebrow="Recipe collection"
          title={pageTitle}
          description={pageDescription}
        />

        {/* Recipe count and clear filters */}
        <div className="mb-7 flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <SlidersHorizontal className="size-5 text-primary" />
            </div>

            <div>
              <p className="text-sm font-semibold">Find your recipe</p>
              <p className="text-xs text-muted-foreground">
                {filteredRecipes.length}{" "}
                {filteredRecipes.length === 1 ? "recipe" : "recipes"} found
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isFetching && (
              <span
                className="text-xs text-muted-foreground"
                role="status"
                aria-live="polite"
              >
                Updating...
              </span>
            )}

            {selectedCategory && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <RotateCcw className="size-4" />
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Category filters */}
        <FilterSection icon={Filter} title="Category">
          <FilterButton
            active={!selectedCategory}
            onClick={() => updateFilter("category", "")}
          >
            All
          </FilterButton>

          {categories.map((category) => (
            <FilterButton
              key={category.id}
              active={selectedCategory === category.id}
              onClick={() => updateFilter("category", category.id)}
            >
              {category.name}
            </FilterButton>
          ))}
        </FilterSection>

        {/* Active filter */}
        {selectedCategory && (
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Active:
            </span>

            <ActiveFilter
              label={selectedCategoryData?.name || selectedCategory}
              onRemove={() => updateFilter("category", "")}
            />
          </div>
        )}

        {/* Recipe grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={handleRecipeClick}
              />
            ))}
          </div>
        ) : (
          <EmptyState onClear={clearFilters} />
        )}
      </section>
    </div>
  );
};

/* Category filter section */
const FilterSection = ({ icon: Icon, title, children }) => {
  return (
    <div className="mb-7">
      <div className="mb-3 flex items-center gap-2">
        {Icon && <Icon className="size-4 text-primary" />}
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {children}
      </div>
    </div>
  );
};

/* Category button */
const FilterButton = ({ active, onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`min-w-0 rounded-xl border px-3 py-2.5 text-xs font-medium transition-all sm:text-sm ${
        active
          ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/10"
          : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:bg-muted hover:text-foreground"
      }`}
    >
      <span className="block truncate">{children}</span>
    </button>
  );
};

/* Active category chip */
const ActiveFilter = ({ label, onRemove }) => {
  return (
    <button
      type="button"
      onClick={onRemove}
      aria-label={`Remove ${label} filter`}
      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/15"
    >
      {label} ×
    </button>
  );
};

/* Reusable skeleton card */
const RecipeSkeletonCard = () => {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-border bg-card"
      aria-hidden="true"
    >
      <div className="relative aspect-[4/3] animate-pulse bg-muted">
        <div className="absolute left-3 top-3 h-6 w-20 rounded-full bg-background/40" />
      </div>

      <div className="space-y-3 p-5">
        <div className="h-3 w-24 animate-pulse rounded bg-muted" />
        <div className="h-5 w-4/5 animate-pulse rounded bg-muted" />
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
      </div>
    </div>
  );
};

/* Page skeleton loader */
const RecipesLoading = () => {
  return (
    <div className="min-h-screen pb-16" role="status" aria-label="Loading recipes">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Header skeleton */}
        <div className="mb-8 space-y-3">
          <div className="h-3 w-32 animate-pulse rounded bg-muted" />
          <div className="h-8 w-56 max-w-full animate-pulse rounded-lg bg-muted sm:h-10 sm:w-80" />
          <div className="h-4 w-full max-w-xl animate-pulse rounded bg-muted" />
          <div className="h-4 w-2/3 max-w-md animate-pulse rounded bg-muted" />
        </div>

        {/* Toolbar skeleton */}
        <div className="mb-7 flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
          <div className="size-10 shrink-0 animate-pulse rounded-xl bg-muted" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-36 animate-pulse rounded bg-muted" />
            <div className="h-3 w-24 animate-pulse rounded bg-muted" />
          </div>
        </div>

        {/* Category skeleton */}
        <div className="mb-8">
          <div className="mb-3 h-4 w-24 animate-pulse rounded bg-muted" />
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-10 animate-pulse rounded-xl border border-border bg-card"
              />
            ))}
          </div>
        </div>

        {/* Recipe card skeleton grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <RecipeSkeletonCard key={index} />
          ))}
        </div>
      </section>

      <span className="sr-only">Loading recipes, please wait.</span>
    </div>
  );
};

/* Error state */
const RecipesError = ({ message, onRetry }) => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="max-w-md text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-destructive/10">
          <AlertCircle className="size-6 text-destructive" />
        </div>

        <h1 className="mt-5 text-2xl font-bold">
          Unable to load recipes
        </h1>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {message}
        </p>

        <button
          type="button"
          onClick={onRetry}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <RotateCcw className="size-4" />
          Try again
        </button>
      </div>
    </div>
  );
};

/* Empty state */
const EmptyState = ({ onClear }) => {
  return (
    <div className="rounded-3xl border border-dashed border-border bg-card/50 px-6 py-20 text-center">
      <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10">
        <ChefHat className="size-6 text-primary" />
      </div>

      <h2 className="mt-5 text-xl font-semibold">No recipes found</h2>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        We couldn't find any recipes in this category. Try another category
        or clear the filter to see all recipes.
      </p>

      <button
        type="button"
        onClick={onClear}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        <RotateCcw className="size-4" />
        Clear filters
      </button>
    </div>
  );
};

export default Recipes;
