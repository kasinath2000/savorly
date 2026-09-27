
import {
  ArrowRight,
  ChefHat,
  Flame,
  Sparkles,
  Utensils,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CategoryCard from "@/components/common/CategoryCard";
import RecipeCard from "@/components/common/RecipeCard";
import SectionHeader from "@/components/common/SectionHeader";
import { categories } from "@/data/categories";
import { recipes } from "@/data/recipes";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
    eyebrow: "Today's inspiration",
    title: "Make something delicious",
    description: "Fresh flavors, simple ingredients.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=85",
    eyebrow: "Fresh & colorful",
    title: "Eat well, feel good",
    description: "Beautiful meals made for everyday moments.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85",
    eyebrow: "Made with love",
    title: "Bring everyone together",
    description: "Recipes worth sharing around the table.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=85",
    eyebrow: "Good food awaits",
    title: "Discover your next favorite",
    description: "Explore something new for your next meal.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const [activeSlide, setActiveSlide] = useState(0);

  const featuredRecipes = recipes.slice(0, 3);
  const currentSlide = heroSlides[activeSlide];

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setActiveSlide((currentIndex) =>
        currentIndex === heroSlides.length - 1
          ? 0
          : currentIndex + 1,
      );
    }, 4000);

    return () => {
      clearInterval(sliderInterval);
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative isolate border-b border-border">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-40 top-10 size-[500px] rounded-full bg-primary/10 blur-[120px]" />

          <div className="absolute -left-40 bottom-0 size-[400px] rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
          {/* Hero Content */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-2 text-sm font-medium text-primary">
              <Sparkles className="size-4" />
              Made for people who love good food
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Discover recipes.
              <span className="block text-primary">
                Cook something amazing.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              From quick weekday meals to dishes worth celebrating,
              discover recipes that make every meal feel special.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => handleNavigation("/recipes")}
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition-all hover:-translate-y-0.5 hover:shadow-primary/20"
              >
                Explore Recipes

                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() =>
                  handleNavigation("/recipes?category=breakfast")
                }
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted"
              >
                <Utensils className="size-4 text-primary" />
                Browse Breakfast
              </button>
            </div>

            {/* Quick Stats */}
            <div className="mt-10 flex flex-wrap gap-6 border-t border-border pt-6">
              <HeroStat
                icon={ChefHat}
                value={`${recipes.length}+`}
                label="Recipes"
              />

              <HeroStat
                icon={Utensils}
                value={`${categories.length}`}
                label="Categories"
              />

              <HeroStat
                icon={Flame}
                value="Fresh"
                label="Every day"
              />
            </div>
          </div>

          {/* Hero Slider */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-black/30">
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/4.5]">
                {heroSlides.map((slide, index) => (
                  <img
                    key={slide.image}
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute inset-0 size-full object-cover transition-all duration-700 ${
                      index === activeSlide
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                    }`}
                  />
                ))}

                {/* Image Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-6 pt-32">
                  <div className="flex items-end justify-between gap-4">
                    <div
                      key={currentSlide.title}
                      className="animate-in fade-in slide-in-from-bottom-2 duration-500"
                    >
                      <p className="text-xs font-medium uppercase tracking-wider text-primary">
                        {currentSlide.eyebrow}
                      </p>

                      <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                        {currentSlide.title}
                      </h2>

                      <p className="mt-1 text-sm text-white/70">
                        {currentSlide.description}
                      </p>
                    </div>

                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md">
                      <ChefHat className="size-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Slider Dots */}
                <div className="absolute bottom-5 left-6 flex items-center gap-1.5">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.image}
                      type="button"
                      aria-label={`Show slide ${index + 1}`}
                      onClick={() => handleSlideChange(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === activeSlide
                          ? "w-7 bg-primary"
                          : "w-1.5 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Explore"
            title="What are you craving?"
            description="Start with a category and find something delicious to make."
            actionLabel="View all recipes"
            onAction={() => handleNavigation("/recipes")}
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                {...category}
                onClick={() =>
                  handleNavigation(
                    `/recipes?category=${category.id}`,
                  )
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Fresh from the kitchen"
            title="Featured recipes"
            description="A few delicious ideas to inspire your next meal."
            actionLabel="See all recipes"
            onAction={() => handleNavigation("/recipes")}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={(selectedRecipe) =>
                  handleNavigation(
                    `/recipes/${selectedRecipe.id}`,
                  )
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 px-6 py-12 text-center sm:px-12">
            <div className="pointer-events-none absolute left-1/2 top-0 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <ChefHat className="size-6" />
              </div>

              <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                Your next favorite recipe is waiting.
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                Explore the collection, pick something that looks
                delicious, and make it your own.
              </p>

              <button
                type="button"
                onClick={() => handleNavigation("/recipes")}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                Explore All Recipes

                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const HeroStat = ({
  icon: Icon,
  value,
  label,
}) => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="size-4 text-primary" />
      </div>

      <div>
        <p className="text-sm font-semibold">
          {value}
        </p>

        <p className="text-xs text-muted-foreground">
          {label}
        </p>
      </div>
    </div>
  );
};

export default Home;
