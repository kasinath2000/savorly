
import {
  Clock3,
  Flame,
  Users,
} from "lucide-react";

const RecipeCard = ({
  recipe,
  onClick,
}) => {
  const {
    name,
    description,
    image,
    category,
    cuisine,
    totalTime,
    servings,
    difficulty,
  } = recipe;

  return (
    <button
      type="button"
      onClick={() => onClick?.(recipe)}
      className="group w-full overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-black/10"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Image Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Category */}
        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-md">
            {category}
          </span>
        </div>

        {/* Difficulty */}
        <div className="absolute bottom-3 right-3">
          <span className="rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-md">
            {difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Cuisine */}
        <p className="text-xs font-medium uppercase tracking-wider text-primary">
          {cuisine}
        </p>

        {/* Name */}
        <h3 className="mt-1.5 line-clamp-1 text-lg font-semibold tracking-tight">
          {name}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
          {description}
        </p>

        {/* Meta */}
        <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock3 className="size-3.5 text-primary" />
            <span>{totalTime} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Users className="size-3.5 text-primary" />
            <span>{servings} servings</span>
          </div>

          <div className="ml-auto flex items-center gap-1.5">
            <Flame className="size-3.5 text-primary" />
            <span>{difficulty}</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default RecipeCard;
