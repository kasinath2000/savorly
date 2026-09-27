
import { ArrowRight } from "lucide-react";

const SectionHeader = ({
  eyebrow,
  title,
  description,
  actionLabel,
  onAction,
}) => {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            {eyebrow}
          </p>
        )}

        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>

        {description && (
          <p className="mt-2 max-w-xl text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          {actionLabel}

          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
