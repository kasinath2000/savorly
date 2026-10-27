import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  IconButton,
  alpha,
  useTheme,
} from "@mui/material";

import {
  ArrowRight,
  ChefHat,
  Flame,
  Sparkles,
  Utensils,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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

const HeroStat = ({ icon: Icon, value, label }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" spacing={1.5} alignItems="center">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          flexShrink: 0,
          borderRadius: 2,
          bgcolor: alpha(theme.palette.primary.main, 0.12),
          color: "primary.main",
        }}
      >
        <Icon size={19} />
      </Box>

      <Box>
        <Typography variant="body2" fontWeight={700}>
          {value}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          {label}
        </Typography>
      </Box>
    </Stack>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [activeSlide, setActiveSlide] = useState(0);

  const featuredRecipes = recipes.slice(0, 3);
  const currentSlide = heroSlides[activeSlide];

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setActiveSlide((currentIndex) => {
        return (currentIndex + 1) % heroSlides.length;
      });
    }, 4000);

    return () => clearInterval(sliderInterval);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  const handlePreviousSlide = () => {
    setActiveSlide(
      (currentIndex) =>
        (currentIndex - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const handleNextSlide = () => {
    setActiveSlide((currentIndex) => (currentIndex + 1) % heroSlides.length);
  };

  return (
    <Box
      component="main"
      sx={{
        overflow: "hidden",
        bgcolor: "background.default",
        color: "text.primary",
        minHeight: "100vh",
      }}
    >
      {/* HERO SECTION */}
      <Box
        component="section"
        sx={{
          position: "relative",
          isolation: "isolate",
          overflow: "hidden",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        {/* Decorative background glow */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: -1,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: 500,
              height: 500,
              right: { xs: -250, md: -160 },
              top: 40,
              borderRadius: "50%",
              bgcolor: alpha(theme.palette.primary.main, 0.12),
              filter: "blur(110px)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              width: 400,
              height: 400,
              left: -180,
              bottom: 0,
              borderRadius: "50%",
              bgcolor: alpha("#E76F51", 0.1),
              filter: "blur(100px)",
            }}
          />
        </Box>

        <Container maxWidth="xl" >
          <Grid
            container
            spacing={{ xs: 5, lg: 8 }}
            alignItems="center"
            sx={{
              minHeight: { lg: "calc(100vh - 64px)" },
              py: { xs: 7, md: 10 },
            }}
          >
            {/* HERO CONTENT */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{
                    display: "inline-flex",
                    mb: 3,
                    px: 1.75,
                    py: 1,
                    borderRadius: 10,
                    border: 1,
                    borderColor: alpha(theme.palette.primary.main, 0.3),
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    color: "primary.main",
                  }}
                >
                  <Sparkles size={16} />

                  <Typography variant="body2" fontWeight={600}>
                    Made for people who love good food
                  </Typography>
                </Stack>

                <Typography
                  component="h1"
                  sx={{
                    maxWidth: 700,
                    fontSize: {
                      xs: "2.65rem",
                      sm: "3.75rem",
                      lg: "4.5rem",
                    },
                    fontWeight: 800,
                    lineHeight: 1.06,
                    letterSpacing: "-0.045em",
                  }}
                >
                  Discover recipes.
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      color: "primary.main",
                    }}
                  >
                    Cook something amazing.
                  </Box>
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 3,
                    maxWidth: 560,
                    fontSize: {
                      xs: "1rem",
                      sm: "1.125rem",
                    },
                    lineHeight: 1.8,
                  }}
                >
                  From quick weekday meals to dishes worth celebrating, discover
                  recipes that make every meal feel special.
                </Typography>

                {/* Hero buttons */}
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{ mt: 4 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRight size={18} />}
                    onClick={() => handleNavigation("/recipes")}
                    sx={{
                      px: 2.5,
                      py: 1.5,
                      borderRadius: 2.5,
                      textTransform: "none",
                      fontWeight: 700,
                      boxShadow: "0 8px 24px rgba(245,158,11,0.18)",
                      transition: "transform 180ms ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Explore Recipes
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Utensils size={18} />}
                    onClick={() =>
                      handleNavigation("/recipes?category=breakfast")
                    }
                    sx={{
                      px: 2.5,
                      py: 1.5,
                      borderRadius: 2.5,
                      textTransform: "none",
                      fontWeight: 700,
                      color: "text.primary",
                      borderColor: "divider",
                      "&:hover": {
                        borderColor: "primary.main",
                        bgcolor: alpha(theme.palette.primary.main, 0.06),
                      },
                    }}
                  >
                    Browse Breakfast
                  </Button>
                </Stack>

                {/* Quick stats */}
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  useFlexGap
                  gap={{ xs: 2.5, sm: 4 }}
                  sx={{
                    mt: 5,
                    pt: 3,
                    borderTop: 1,
                    borderColor: "divider",
                  }}
                >
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

                  <HeroStat icon={Flame} value="Fresh" label="Every day" />
                </Stack>
              </Box>
            </Grid>

            {/* HERO IMAGE SLIDER */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 540,
                  mx: "auto",
                  ml: { lg: "auto" },
                }}
              >
                {/* Outer warm glow */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: -12,
                    borderRadius: 4,
                    bgcolor: alpha(theme.palette.primary.main, 0.13),
                    filter: "blur(30px)",
                    pointerEvents: "none",
                  }}
                />

                {/* Slider frame - no Paper */}
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: { xs: 2.5, sm: 3 },
                    border: 1,
                    borderColor: "divider",
                    bgcolor: "background.paper",
                    boxShadow:
                      theme.palette.mode === "dark"
                        ? "0 24px 65px rgba(0,0,0,0.4)"
                        : "0 24px 65px rgba(0,0,0,0.14)",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      aspectRatio: {
                        xs: "4 / 4.5",
                        sm: "5 / 4.5",
                      },
                      overflow: "hidden",
                    }}
                  >
                    {/* Slides */}
                    {heroSlides.map((slide, index) => (
                      <Box
                        component="img"
                        key={slide.image}
                        src={slide.image}
                        alt={slide.title}
                        loading={index === 0 ? "eager" : "lazy"}
                        sx={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          opacity: index === activeSlide ? 1 : 0,
                          transform:
                            index === activeSlide ? "scale(1)" : "scale(1.06)",
                          transition:
                            "opacity 700ms ease, transform 1200ms ease",
                        }}
                      />
                    ))}

                    {/* Bottom gradient and orange glow */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        p: { xs: 2.5, sm: 3.5 },
                        pb: 7,
                        background: `
                          linear-gradient(
                            to top,
                            rgba(12, 9, 7, 0.98) 0%,
                            rgba(20, 13, 9, 0.86) 24%,
                            rgba(20, 13, 9, 0.42) 48%,
                            transparent 76%
                          )
                        `,
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          left: "-10%",
                          right: "-10%",
                          bottom: "-35%",
                          height: "65%",
                          background:
                            "radial-gradient(ellipse at bottom, rgba(245,158,11,0.35) 0%, rgba(231,111,81,0.17) 38%, transparent 72%)",
                          filter: "blur(28px)",
                          pointerEvents: "none",
                        },
                      }}
                    >
                      <Box
                        key={currentSlide.title}
                        sx={{
                          position: "relative",
                          zIndex: 1,
                          animation: "heroFadeIn 450ms ease",
                          "@keyframes heroFadeIn": {
                            from: {
                              opacity: 0,
                              transform: "translateY(10px)",
                            },
                            to: {
                              opacity: 1,
                              transform: "translateY(0)",
                            },
                          },
                        }}
                      >
                        <Typography
                          variant="overline"
                          sx={{
                            color: "#FBBF24",
                            fontWeight: 700,
                            letterSpacing: 1.5,
                          }}
                        >
                          {currentSlide.eyebrow}
                        </Typography>

                        <Typography
                          component="h2"
                          sx={{
                            mt: 0.5,
                            color: "#FFFFFF",
                            fontSize: {
                              xs: "1.65rem",
                              sm: "2rem",
                            },
                            fontWeight: 800,
                            lineHeight: 1.2,
                          }}
                        >
                          {currentSlide.title}
                        </Typography>

                        <Typography
                          sx={{
                            mt: 1,
                            color: "rgba(255,255,255,0.82)",
                            fontSize: "0.9rem",
                            lineHeight: 1.6,
                          }}
                        >
                          {currentSlide.description}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Previous slide */}
                    <IconButton
                      aria-label="Previous slide"
                      onClick={handlePreviousSlide}
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: 12,
                        transform: "translateY(-50%)",
                        width: 40,
                        height: 40,
                        color: "#FFFFFF",
                        bgcolor: "rgba(0,0,0,0.38)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        "&:hover": {
                          bgcolor: "rgba(0,0,0,0.7)",
                        },
                      }}
                    >
                      <ChevronLeft size={22} />
                    </IconButton>

                    {/* Next slide */}
                    <IconButton
                      aria-label="Next slide"
                      onClick={handleNextSlide}
                      sx={{
                        position: "absolute",
                        top: "50%",
                        right: 12,
                        transform: "translateY(-50%)",
                        width: 40,
                        height: 40,
                        color: "#FFFFFF",
                        bgcolor: "rgba(0,0,0,0.38)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        "&:hover": {
                          bgcolor: "rgba(0,0,0,0.7)",
                        },
                      }}
                    >
                      <ChevronRight size={22} />
                    </IconButton>

                    {/* Slide indicators */}
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        position: "absolute",
                        left: { xs: 20, sm: 28 },
                        bottom: 24,
                        zIndex: 2,
                      }}
                    >
                      {heroSlides.map((slide, index) => (
                        <Box
                          component="button"
                          key={slide.image}
                          type="button"
                          aria-label={`Show slide ${index + 1}`}
                          aria-current={
                            index === activeSlide ? "true" : undefined
                          }
                          onClick={() => handleSlideChange(index)}
                          sx={{
                            width: index === activeSlide ? 28 : 8,
                            height: 6,
                            p: 0,
                            border: 0,
                            borderRadius: 10,
                            cursor: "pointer",
                            bgcolor:
                              index === activeSlide
                                ? "#F59E0B"
                                : "rgba(255,255,255,0.6)",
                            transition: "all 250ms ease",
                            "&:focus-visible": {
                              outline: "2px solid white",
                              outlineOffset: 3,
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CATEGORIES SECTION */}
      <Box
        component="section"
        sx={{
          py: { xs: 7, md: 10 },
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow="Explore"
            title="What are you craving?"
            description="Start with a category and find something delicious to make."
            actionLabel="View all recipes"
            onAction={() => handleNavigation("/recipes")}
          />

          <Grid container spacing={2} sx={{ mt: 2 }}>
            {categories.map((category) => (
              <Grid key={category.id} size={{ xs: 6, sm: 4, lg: 2 }}>
                <CategoryCard
                  {...category}
                  onClick={() =>
                    handleNavigation(`/recipes?category=${category.id}`)
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FEATURED RECIPES SECTION */}
      <Box
        component="section"
        sx={{
          py: { xs: 7, md: 10 },
        }}
      >
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow="Fresh from the kitchen"
            title="Featured recipes"
            description="A few delicious ideas to inspire your next meal."
            actionLabel="See all recipes"
            onAction={() => handleNavigation("/recipes")}
          />

          <Grid container spacing={3} sx={{ mt: 2 }}>
            {featuredRecipes.map((recipe) => (
              <Grid key={recipe.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                <RecipeCard
                  recipe={recipe}
                  onClick={(selectedRecipe) =>
                    handleNavigation(`/recipes/${selectedRecipe.id}`)
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* BOTTOM CTA */}
      <Box
        component="section"
        sx={{
          py: { xs: 7, md: 10 },
          borderTop: 1,
          borderColor: "divider",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              position: "relative",
              isolation: "isolate",
              overflow: "hidden",
              p: { xs: 4, sm: 7 },
              textAlign: "center",
              borderRadius: { xs: 3, sm: 4 },
              border: 1,
              borderColor: alpha(theme.palette.primary.main, 0.28),
              bgcolor: theme.palette.mode === "dark" ? "#211D1A" : "#FFF9F0",
              backgroundImage: `
                radial-gradient(
                  ellipse at 50% 115%,
                  ${alpha(theme.palette.primary.main, 0.2)} 0%,
                  transparent 60%
                )
              `,
            }}
          >
            {/* CTA background glow */}
            <Box
              sx={{
                position: "absolute",
                zIndex: -1,
                top: -130,
                left: "50%",
                width: 300,
                height: 260,
                transform: "translateX(-50%)",
                borderRadius: "50%",
                bgcolor: alpha(theme.palette.primary.main, 0.14),
                filter: "blur(75px)",
                pointerEvents: "none",
              }}
            />

            <Stack alignItems="center">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 54,
                  height: 54,
                  borderRadius: 2.5,
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                  boxShadow: "0 8px 28px rgba(245,158,11,0.22)",
                }}
              >
                <ChefHat size={26} />
              </Box>

              <Typography
                component="h2"
                sx={{
                  mt: 3,
                  fontSize: {
                    xs: "1.6rem",
                    sm: "2rem",
                  },
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.25,
                }}
              >
                Your next favorite recipe is waiting.
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mt: 1.5,
                  maxWidth: 600,
                  lineHeight: 1.8,
                }}
              >
                Explore the collection, pick something that looks delicious, and
                make it your own.
              </Typography>

              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowRight size={18} />}
                onClick={() => handleNavigation("/recipes")}
                sx={{
                  mt: 3.5,
                  px: 2.5,
                  py: 1.5,
                  borderRadius: 2.5,
                  fontWeight: 700,
                  textTransform: "none",
                  boxShadow: "0 8px 24px rgba(245,158,11,0.18)",
                  "&:hover": {
                    boxShadow: "0 10px 30px rgba(245,158,11,0.28)",
                  },
                }}
              >
                Explore All Recipes
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
