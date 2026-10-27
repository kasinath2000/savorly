
import {
  Box,
  Paper,
  Typography,
  useTheme,
  alpha,
} from "@mui/material";

const CategoryCard = ({
  name,
  description,
  icon: Icon,
  color,
  background,
  onClick,
}) => {
  const theme = useTheme();

  // Supports existing Tailwind color classes or MUI color values.
  const iconColor =
    color?.startsWith("#") || color?.startsWith("rgb")
      ? color
      : theme.palette.primary.main;

  const iconBackground =
    background?.startsWith("#") || background?.startsWith("rgb")
      ? background
      : alpha(iconColor, 0.12);

  return (
    <Paper
      component="button"
      type="button"
      onClick={onClick}
      elevation={0}
      sx={{
        width: "100%",
        p: 2.5,
        textAlign: "left",
        cursor: "pointer",
        borderRadius: 4,
        border: `1px solid ${theme.palette.divider}`,
        bgcolor: "background.paper",
        color: "text.primary",
        transition: "all 200ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: alpha(theme.palette.primary.main, 0.5),
          bgcolor: "action.hover",
        },
        "&:focus-visible": {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: 3,
        },
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 3,
          bgcolor: iconBackground,
          color: iconColor,
        }}
      >
        {Icon && <Icon size={24} />}
      </Box>

      <Typography
        component="h3"
        variant="subtitle1"
        fontWeight={700}
        sx={{ mt: 2, letterSpacing: "-0.02em" }}
      >
        {name}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 0.5, lineHeight: 1.6 }}
      >
        {description}
      </Typography>
    </Paper>
  );
};

export default CategoryCard;
