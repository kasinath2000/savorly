
const CategoryCard = ({
  name,
  description,
  icon: Icon,
  color,
  background,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full rounded-2xl border border-border bg-card p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:bg-muted"
    >
      <div
        className={`flex size-12 items-center justify-center rounded-xl ${background}`}
      >
        <Icon className={`size-6 ${color}`} />
      </div>

      <h3 className="mt-4 font-semibold tracking-tight">
        {name}
      </h3>

      <p className="mt-1 text-sm leading-5 text-muted-foreground">
        {description}
      </p>
    </button>
  );
};

export default CategoryCard;
