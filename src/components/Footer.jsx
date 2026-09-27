
import {
  ChefHat,
  Globe,
  Heart,
  Mail,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExternalClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              type="button"
              onClick={() => handleNavigate("/")}
              className="inline-flex items-center gap-3"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <ChefHat className="size-5" />
              </div>

              <span className="text-xl font-bold tracking-tight">
                Savorly
              </span>
            </button>

            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              Discover delicious recipes, explore new cuisines, and bring
              something special to your kitchen.
            </p>

            <p className="mt-3 text-sm font-medium text-primary">
              Discover · Cook · Savor
            </p>

            <div className="mt-6 flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  handleExternalClick("https://instagram.com")
                }
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:bg-muted hover:text-foreground"
              >
                <Globe className="size-4" />
              </button>

              <button
                type="button"
                onClick={() =>
                  handleExternalClick("mailto:hello@savorly.app")
                }
                aria-label="Email"
                className="flex size-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:bg-muted hover:text-foreground"
              >
                <Mail className="size-4" />
              </button>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Explore
            </h3>

            <div className="mt-4 flex flex-col items-start gap-3">
              <button
                type="button"
                onClick={() => handleNavigate("/")}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Home
              </button>

              <button
                type="button"
                onClick={() => handleNavigate("/recipes")}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                All Recipes
              </button>
            </div>
          </div>

          {/* Savorly */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Savorly
            </h3>

            <div className="mt-4 flex flex-col items-start gap-3">
              <button
                type="button"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                About Us
              </button>

              <button
                type="button"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </button>

              <button
                type="button"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Privacy
              </button>

              <button
                type="button"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Terms
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Savorly. All rights reserved.
          </p>

          <p className="inline-flex items-center gap-1 text-muted-foreground">
            Made with
            <Heart className="size-3.5 fill-current text-accent" />
            good food & good vibes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
