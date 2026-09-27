
import {
  ChevronDown,
  Clock3,
  Filter,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";
import { useMemo } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import RecipeCard from "@/components/common/RecipeCard";
import SectionHeader from "@/components/common/SectionHeader";
import { categories } from "@/data/categories";
import { recipes } from "@/data/recipes";

const cuisineOptions = [
  ...new Set(
    recipes
      .map((recipe) => recipe.cuisine)
      .filter(Boolean),
  ),
];

const mealTypeOptions = [
  ...new Set(
    recipes
      .map((recipe) => recipe.mealType)
      .filter(Boolean),
  ),
];

const difficultyOptions = [
  ...new Set(
    recipes
      .map((recipe) => recipe.difficulty)
      .filter(Boolean),
  ),
];

const timeOptions = [
  {
    id: "under-30",
    label: "Under 30 min",
    max: 30,
  },
  {
    id: "30-60",
    label: "30–60 min",
    min: 30,
    max: 60,
  },
  {
    id: "60-plus",
    label: "60+ min",
    min: 60,
  },
];

const Recipes = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const selectedCategory =
    searchParams.get("category") || "";

  const selectedCuisine =
    searchParams.get("cuisine") || "";

  const selectedMealType =
    searchParams.get("mealType") || "";

  const selectedDifficulty =
    searchParams.get("difficulty") || "";

  const selectedTime =
    searchParams.get("time") || "";

  const activeFilterCount = [
    selectedCategory,
    selectedCuisine,
    selectedMealType,
    selectedDifficulty,
    selectedTime,
  ].filter(Boolean).length;

  const selectedTimeData = timeOptions.find(
    (time) => time.id === selectedTime,
  );

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesCategory =
        !selectedCategory ||
        recipe.category === selectedCategory;

      const matchesCuisine =
        !selectedCuisine ||
        recipe.cuisine === selectedCuisine;

      const matchesMealType =
        !selectedMealType ||
        recipe.mealType === selectedMealType;

      const matchesDifficulty =
        !selectedDifficulty ||
        recipe.difficulty === selectedDifficulty;

      const matchesTime =
        !selectedTimeData ||
        ((!selectedTimeData.min ||
          recipe.totalTime >= selectedTimeData.min) &&
          (!selectedTimeData.max ||
            recipe.totalTime < selectedTimeData.max));

      return (
        matchesCategory &&
        matchesCuisine &&
        matchesMealType &&
        matchesDifficulty &&
        matchesTime
      );
    });
  }, [
    selectedCategory,
    selectedCuisine,
    selectedMealType,
    selectedDifficulty,
    selectedTime,
    selectedTimeData,
  ]);

  const selectedCategoryData = categories.find(
    (category) => category.id === selectedCategory,
  );

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(
      searchParams,
    );

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    const queryString = params.toString();

    navigate(
      queryString
        ? `/recipes?${queryString}`
        : "/recipes",
    );
  };

  const clearFilters = () => {
    navigate("/recipes");
  };

  const handleRecipeClick = (recipe) => {
    navigate(`/recipes/${recipe.id}`);
  };

  const pageTitle =
    selectedCategoryData?.name ||
    selectedCuisine ||
    selectedMealType ||
    "Explore recipes";

  const pageDescription =
    selectedCategoryData?.description ||
    "Discover delicious recipes by cuisine, category, meal, difficulty, and cooking time.";

  return (
    <div className="pb-16">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <SectionHeader
          eyebrow="Recipe collection"
          title={pageTitle}
          description={pageDescription}
        />

        {/* Filter Summary */}
        <div className="mb-7 flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <SlidersHorizontal className="size-5 text-primary" />
            </div>

            <div>
              <p className="text-sm font-semibold">
                Find your recipe
              </p>

              <p className="text-xs text-muted-foreground">
                {filteredRecipes.length}{" "}
                {filteredRecipes.length === 1
                  ? "recipe"
                  : "recipes"}{" "}
                found
              </p>
            </div>
          </div>

          {activeFilterCount > 0 && (
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

        {/* Category */}
        <FilterSection
          icon={Filter}
          title="Category"
        >
          <FilterButton
            active={!selectedCategory}
            onClick={() =>
              updateFilter("category", "")
            }
          >
            All
          </FilterButton>

          {categories.map((category) => (
            <FilterButton
              key={category.id}
              active={
                selectedCategory === category.id
              }
              onClick={() =>
                updateFilter(
                  "category",
                  category.id,
                )
              }
            >
              {category.name}
            </FilterButton>
          ))}
        </FilterSection>

        {/* Cuisine */}
        <FilterSection title="Cuisine">
          <FilterButton
            active={!selectedCuisine}
            onClick={() =>
              updateFilter("cuisine", "")
            }
          >
            All Cuisines
          </FilterButton>

          {cuisineOptions.map((cuisine) => (
            <FilterButton
              key={cuisine}
              active={
                selectedCuisine === cuisine
              }
              onClick={() =>
                updateFilter(
                  "cuisine",
                  cuisine,
                )
              }
            >
              {cuisine}
            </FilterButton>
          ))}
        </FilterSection>

        {/* Select Filters */}
        <div className="mb-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FilterSelect
            label="Meal Type"
            value={selectedMealType}
            onChange={(value) =>
              updateFilter(
                "mealType",
                value,
              )
            }
            options={mealTypeOptions}
            placeholder="All meals"
          />

          <FilterSelect
            label="Difficulty"
            value={selectedDifficulty}
            onChange={(value) =>
              updateFilter(
                "difficulty",
                value,
              )
            }
            options={difficultyOptions}
            placeholder="Any difficulty"
          />

          <FilterSelect
            label="Cooking Time"
            value={selectedTime}
            onChange={(value) =>
              updateFilter(
                "time",
                value,
              )
            }
            options={timeOptions}
            placeholder="Any cooking time"
            optionValueKey="id"
          />
        </div>

        {/* Active Filters */}
        {activeFilterCount > 0 && (
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Active:
            </span>

            {selectedCategory && (
              <ActiveFilter
                label={
                  selectedCategoryData?.name ||
                  selectedCategory
                }
                onRemove={() =>
                  updateFilter(
                    "category",
                    "",
                  )
                }
              />
            )}

            {selectedCuisine && (
              <ActiveFilter
                label={selectedCuisine}
                onRemove={() =>
                  updateFilter(
                    "cuisine",
                    "",
                  )
                }
              />
            )}

            {selectedMealType && (
              <ActiveFilter
                label={selectedMealType}
                onRemove={() =>
                  updateFilter(
                    "mealType",
                    "",
                  )
                }
              />
            )}

            {selectedDifficulty && (
              <ActiveFilter
                label={selectedDifficulty}
                onRemove={() =>
                  updateFilter(
                    "difficulty",
                    "",
                  )
                }
              />
            )}

            {selectedTime && (
              <ActiveFilter
                label={
                  selectedTimeData?.label ||
                  selectedTime
                }
                onRemove={() =>
                  updateFilter(
                    "time",
                    "",
                  )
                }
              />
            )}
          </div>
        )}

        {/* Recipe Grid */}
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

const FilterSection = ({
  icon: Icon,
  title,
  children,
}) => {
  return (
    <div className="mb-5">
      <div className="mb-3 flex items-center gap-2">
        {Icon && (
          <Icon className="size-4 text-primary" />
        )}

        <h3 className="text-sm font-semibold">
          {title}
        </h3>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {children}
      </div>
    </div>
  );
};

const FilterButton = ({
  active,
  onClick,
  children,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
        active
          ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/10"
          : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:bg-muted hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
};

const FilterSelect = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  optionValueKey,
}) => {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          className="h-11 w-full appearance-none rounded-xl border border-border bg-card px-4 pr-10 text-sm font-medium text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          style={{
            colorScheme: "dark",
          }}
        >
          <option
            value=""
            className="bg-[#211d1a] text-[#faf7f2]"
          >
            {placeholder}
          </option>

          {options.map((option) => {
            const optionValue =
              optionValueKey
                ? option[optionValueKey]
                : option;

            const optionLabel =
              typeof option === "string"
                ? option
                : option.label;

            return (
              <option
                key={optionValue}
                value={optionValue}
                className="bg-[#211d1a] text-[#faf7f2]"
              >
                {optionLabel}
              </option>
            );
          })}
        </select>

        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    </div>
  );
};

const ActiveFilter = ({
  label,
  onRemove,
}) => {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/15"
    >
      {label} ×
    </button>
  );
};

const EmptyState = ({ onClear }) => {
  return (
    <div className="rounded-3xl border border-dashed border-border bg-card/50 px-6 py-20 text-center">
      <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10">
        <Clock3 className="size-6 text-primary" />
      </div>

      <h2 className="mt-5 text-xl font-semibold">
        No recipes found
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        We couldn't find a recipe matching
        those filters. Try removing one or
        clearing all filters.
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
