
import {
  BookOpen,
  ChefHat,
  Clock3,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { navigation } from "@/data/navigation";
import { recipes } from "@/data/recipes";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [query, setQuery] = useState("");

  const searchResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return [];
    }

    return recipes
      .filter((recipe) => {
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
      })
      .slice(0, 5);
  }, [query]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleRecipeSelect = (recipeId) => {
    setQuery("");
    navigate(`/recipes/${recipeId}`);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (searchResults.length > 0) {
      handleRecipeSelect(searchResults[0].id);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <header className="sticky top-0 z-50 hidden w-full border-b border-border bg-background/85 backdrop-blur-xl md:block">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavigation("/")}
            className="flex shrink-0 items-center gap-2.5"
          >
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <ChefHat className="size-5" />
            </div>

            <span className="text-xl font-bold tracking-tight">
              Savorly
            </span>
          </button>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive =
                location.pathname === item.href ||
                (item.href !== "/" &&
                  location.pathname.startsWith(item.href));

              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavigation(item.href)}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="size-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Search */}
          <div className="relative ml-auto w-full max-w-sm">
            <form onSubmit={handleSearchSubmit}>
              <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <input
                type="search"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search recipes..."
                className="h-10 w-full rounded-xl border border-border bg-card pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </form>

            {query.trim() && (
              <SearchResults
                results={searchResults}
                onSelect={handleRecipeSelect}
              />
            )}
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 px-4 py-3 backdrop-blur-xl md:hidden">
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => handleNavigation("/")}
            className="flex shrink-0 items-center gap-2"
          >
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <ChefHat className="size-5" />
            </div>

            <span className="font-bold tracking-tight">
              Savorly
            </span>
          </button>

          <div className="relative min-w-0 flex-1">
            <form onSubmit={handleSearchSubmit}>
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <input
                type="search"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search recipes..."
                className="h-10 w-full rounded-xl border border-border bg-card pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </form>

            {query.trim() && (
              <SearchResults
                results={searchResults}
                onSelect={handleRecipeSelect}
              />
            )}
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-2 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(0,0,0,0.2)] backdrop-blur-xl md:hidden">
        <div className="mx-auto flex h-16 max-w-md items-center justify-around">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive =
              location.pathname === item.href ||
              (item.href !== "/" &&
                location.pathname.startsWith(item.href));

            return (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavigation(item.href)}
                className={`flex min-w-20 flex-col items-center justify-center gap-1 rounded-xl px-3 py-1.5 transition-colors active:scale-95 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <Icon className="size-5" />

                <span className="text-[11px] font-medium">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

const SearchResults = ({ results, onSelect }) => {
  return (
    <div className="absolute inset-x-0 top-full z-[60] mt-2 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
      {results.length > 0 ? (
        <div className="p-2">
          {results.map((recipe) => (
            <button
              key={recipe.id}
              type="button"
              onClick={() => onSelect(recipe.id)}
              className="flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-muted"
            >
              <img
                src={recipe.image}
                alt=""
                className="size-12 shrink-0 rounded-lg object-cover"
              />

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  {recipe.name}
                </p>

                <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{recipe.category}</span>

                  <span>•</span>

                  <span className="flex items-center gap-1">
                    <Clock3 className="size-3" />
                    {recipe.totalTime} min
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="px-4 py-5 text-center">
          <Search className="mx-auto size-5 text-muted-foreground" />

          <p className="mt-2 text-sm font-medium">
            No recipes found
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            Try another search.
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
