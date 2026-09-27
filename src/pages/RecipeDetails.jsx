
import {
  ArrowLeft,
  ChefHat,
  Clock3,
  Flame,
  Lightbulb,
  Users,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { recipes } from "@/data/recipes";

const RecipeDetails = () => {
  const navigate = useNavigate();
  const { recipeId } = useParams();

  const recipe = recipes.find((item) => item.id === recipeId);

  const handleBack = () => {
    navigate("/recipes");
  };

  if (!recipe) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4">
        <div className="text-center">
          <ChefHat className="mx-auto size-12 text-muted-foreground" />

          <h1 className="mt-4 text-2xl font-bold">
            Recipe not found
          </h1>

          <p className="mt-2 text-muted-foreground">
            The recipe you're looking for doesn't exist.
          </p>

          <button
            type="button"
            onClick={handleBack}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ArrowLeft className="size-4" />
            Back to Recipes
          </button>
        </div>
      </section>
    );
  }

  return (
    <div className="pb-16">
      {/* Back Button */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to Recipes
        </button>
      </div>

      {/* Recipe Hero */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
          {/* Recipe Image */}
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          {/* Recipe Information */}
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                {recipe.category}
              </span>

              <span className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
                {recipe.cuisine}
              </span>

              <span className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
                {recipe.mealType}
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              {recipe.name}
            </h1>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              {recipe.description}
            </p>

            {/* Recipe Stats */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <RecipeStat
                icon={Clock3}
                label="Prep Time"
                value={`${recipe.prepTime} min`}
              />

              <RecipeStat
                icon={Flame}
                label="Cook Time"
                value={`${recipe.cookTime} min`}
              />

              <RecipeStat
                icon={Clock3}
                label="Total Time"
                value={`${recipe.totalTime} min`}
              />

              <RecipeStat
                icon={Users}
                label="Servings"
                value={recipe.servings}
              />
            </div>

            {/* Difficulty */}
            <div className="mt-4 inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
              Difficulty:
              <span className="ml-1 font-semibold text-foreground">
                {recipe.difficulty}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Content */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          {/* Left Column */}
          <div>
            <div className="lg:sticky lg:top-24">
              {/* Ingredients */}
              <div>
                <SectionLabel>
                  What you need
                </SectionLabel>

                <h2 className="mt-2 text-2xl font-bold">
                  Ingredients
                </h2>

                <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div
                      key={`${ingredient.name}-${index}`}
                      className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 last:border-b-0"
                    >
                      <span className="text-sm">
                        {ingredient.name}
                      </span>

                      <span className="shrink-0 text-sm font-medium text-muted-foreground">
                        {ingredient.quantity} {ingredient.unit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment */}
              <div className="mt-8">
                <SectionLabel>
                  Kitchen tools
                </SectionLabel>

                <h2 className="mt-2 text-2xl font-bold">
                  Equipment
                </h2>

                <div className="mt-5 flex flex-wrap gap-2">
                  {recipe.equipment.map((item) => (
                    <span
                      key={item}
                      className="rounded-xl border border-border bg-card px-3 py-2 text-sm text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Instructions */}
            <SectionLabel>
              Let's cook
            </SectionLabel>

            <h2 className="mt-2 text-2xl font-bold">
              Instructions
            </h2>

            <div className="mt-6 space-y-5">
              {recipe.instructions.map((instruction) => (
                <div
                  key={instruction.step}
                  className="rounded-2xl border border-border bg-card p-5 sm:p-6"
                >
                  <div className="flex gap-4">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {instruction.step}
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {instruction.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {instruction.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Nutrition */}
            <div className="mt-12">
              <SectionLabel>
                Nutrition
              </SectionLabel>

              <h2 className="mt-2 text-2xl font-bold">
                Per serving
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <NutritionCard
                  label="Calories"
                  value={recipe.nutrition.calories}
                />

                <NutritionCard
                  label="Protein"
                  value={`${recipe.nutrition.protein}g`}
                />

                <NutritionCard
                  label="Carbs"
                  value={`${recipe.nutrition.carbs}g`}
                />

                <NutritionCard
                  label="Fat"
                  value={`${recipe.nutrition.fat}g`}
                />
              </div>
            </div>

            {/* Chef Tips */}
            <div className="mt-12">
              <div className="flex items-center gap-2">
                <Lightbulb className="size-5 text-primary" />

                <h2 className="text-2xl font-bold">
                  Chef's Tips
                </h2>
              </div>

              <div className="mt-5 space-y-3">
                {recipe.tips.map((tip) => (
                  <div
                    key={tip}
                    className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm leading-6 text-muted-foreground"
                  >
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const RecipeStat = ({
  icon: Icon,
  label,
  value,
}) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <Icon className="size-5 text-primary" />

      <p className="mt-3 text-xs text-muted-foreground">
        {label}
      </p>

      <p className="mt-1 font-semibold">
        {value}
      </p>
    </div>
  );
};

const NutritionCard = ({
  label,
  value,
}) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="text-sm text-muted-foreground">
        {label}
      </p>

      <p className="mt-2 text-xl font-bold">
        {value}
      </p>
    </div>
  );
};

const SectionLabel = ({ children }) => {
  return (
    <p className="text-sm font-medium uppercase tracking-wider text-primary">
      {children}
    </p>
  );
};

export default RecipeDetails;
