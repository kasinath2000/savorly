import {
  Box,
  Chip,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";

const RecipeCard = ({ recipe, onClick }) => {
  const theme = useTheme();
  const { name, description, image, category } = recipe;

  return (
    <Box
      component="button"
      type="button"
      onClick={() => onClick?.(recipe)}
      sx={{
        display: "block",
        width: "100%",
        p: 0,
        overflow: "hidden",
        textAlign: "left",
        cursor: "pointer",
        borderRadius: 3,
        border: `1px solid ${theme.palette.divider}`,
        bgcolor: "background.paper",
        color: "text.primary",
        font: "inherit",
        transition: "transform 300ms ease, border-color 300ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: alpha(theme.palette.primary.main, 0.5),
        },
        "&:hover .recipe-image": {
          transform: "scale(1.05)",
        },
        "&:focus-visible": {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: 3,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          aspectRatio: "4 / 3",
          overflow: "hidden",
          bgcolor: "action.hover",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={name || "Recipe"}
          loading="lazy"
          className="recipe-image"
          sx={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
            transition: "transform 500ms ease",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: "auto 0 0",
            height: 96,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
            pointerEvents: "none",
          }}
        />

        {category && (
          <Chip
            label={category}
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              bgcolor: alpha(theme.palette.background.paper, 0.92),
              color: "text.primary",
              backdropFilter: "blur(8px)",
              fontWeight: 600,
              maxWidth: "calc(100% - 24px)",
            }}
          />
        )}
      </Box>

      <Box sx={{ p: 2.5 }}>
        <Typography
          component="h3"
          variant="h6"
          fontWeight={700}
          sx={{
            letterSpacing: "-0.02em",
            overflowWrap: "anywhere",
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 1,
            lineHeight: 1.7,
            minHeight: "3.4em",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default RecipeCard;