
import { useMemo, useState } from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  AppBar,
  Autocomplete,
  Avatar,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {
  Clock,
  ChefHat,
  Search,
  Sun,
  Moon,
} from "lucide-react";

import { navigation } from "@/data/navigation";
import { recipes } from "@/data/recipes";
import { useThemeMode } from "@/theme/ThemeModeProvider";

const BRAND = "Savorly";

const getRecipeSearchText = (recipe) =>
  [
    recipe.name,
    recipe.description,
    recipe.category,
    recipe.cuisine,
    recipe.mealType,
    ...(recipe.tags ?? []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const { mode, toggleTheme } = useThemeMode();

  const isDesktop = useMediaQuery(
    theme.breakpoints.up("md")
  );

  const isDarkMode = mode === "dark";

  const [query, setQuery] = useState("");

  const searchResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return [];
    }

    return recipes
      .filter((recipe) =>
        getRecipeSearchText(recipe).includes(normalizedQuery)
      )
      .slice(0, 5);
  }, [query]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleRecipeSelect = (recipeId) => {
    setQuery("");
    navigate(`/recipes/${recipeId}`);
  };

  const isActiveRoute = (href) =>
    location.pathname === href ||
    (href !== "/" && location.pathname.startsWith(href));

  const renderLogo = (compact = false) => (
    <Button
      onClick={() => handleNavigation("/")}
      color="inherit"
      disableRipple
      sx={{
        minWidth: 0,
        flexShrink: 0,
        gap: 1.25,
        p: 0,
        textTransform: "none",
        borderRadius: 2,
        color: "text.primary",
      }}
      aria-label={`${BRAND} home`}
    >
      <Avatar
        variant="rounded"
        sx={{
          width: 38,
          height: 38,
          bgcolor: "primary.main",
          color: "primary.contrastText",
          borderRadius: 2.5,
        }}
      >
        <ChefHat size={21} />
      </Avatar>

      <Typography
        variant={compact ? "subtitle1" : "h6"}
        fontWeight={800}
        letterSpacing={-0.5}
      >
        {BRAND}
      </Typography>
    </Button>
  );

  const renderThemeToggle = () => (
    <Tooltip
      title={
        isDarkMode
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      <IconButton
        onClick={toggleTheme}
        aria-label={
          isDarkMode
            ? "Switch to light mode"
            : "Switch to dark mode"
        }
        aria-pressed={isDarkMode}
        sx={{
          width: 42,
          height: 42,
          flexShrink: 0,
          border: 1,
          borderColor: "divider",
          borderRadius: 2.5,
          color: "text.primary",
          bgcolor: "background.paper",
          transition: "all 200ms ease",
          "&:hover": {
            bgcolor: "action.hover",
          },
        }}
      >
        {isDarkMode ? (
          <Sun size={19} />
        ) : (
          <Moon size={19} />
        )}
      </IconButton>
    </Tooltip>
  );

  const renderSearch = (mobile = false) => (
    <Autocomplete
      freeSolo
      options={searchResults}
      inputValue={query}
      getOptionLabel={(option) =>
        typeof option === "string"
          ? option
          : option.name
      }
      filterOptions={(options) => options}
      noOptionsText="No recipes found. Try another search."
      onInputChange={(_, value, reason) => {
        if (reason === "input" || reason === "clear") {
          setQuery(value);
        }
      }}
      onChange={(_, value) => {
        if (value && typeof value === "object") {
          handleRecipeSelect(value.id);
        }
      }}
      onKeyDown={(event) => {
        if (
          event.key === "Enter" &&
          searchResults.length > 0
        ) {
          event.preventDefault();
          event.stopPropagation();

          handleRecipeSelect(searchResults[0].id);
        }
      }}
      renderOption={(props, recipe) => (
        <Box
          component="li"
          {...props}
          key={recipe.id}
          sx={{
            gap: 1.5,
            borderRadius: 2,
            p: 1,
          }}
        >
          <Box
            component="img"
            src={recipe.image}
            alt=""
            sx={{
              width: 48,
              height: 48,
              objectFit: "cover",
              borderRadius: 1.5,
              flexShrink: 0,
            }}
          />

          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography
              variant="body2"
              fontWeight={700}
              noWrap
            >
              {recipe.name}
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ mt: 0.5 }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                noWrap
              >
                {recipe.category}
              </Typography>

              <Typography
                variant="caption"
                color="text.secondary"
              >
                ·
              </Typography>

              <Stack
                direction="row"
                spacing={0.5}
                alignItems="center"
              >
                <Clock size={12} />

                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  {recipe.totalTime} min
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      )}
      renderInput={(params) => {
        const {
          InputProps = {},
          ...textFieldParams
        } = params;

        return (
          <TextField
            {...textFieldParams}
            placeholder="Search recipes..."
            size="small"
            fullWidth
            InputProps={{
              ...InputProps,
              startAdornment: (
                <>
                  <InputAdornment position="start">
                    <Search size={18} />
                  </InputAdornment>

                  {InputProps.startAdornment}
                </>
              ),
            }}
          />
        );
      }}
      sx={{
        width: "100%",

        "& .MuiOutlinedInput-root": {
          borderRadius: 3,
          bgcolor: "background.paper",
          color: "text.primary",
        },

        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "divider",
        },

        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "text.secondary",
          },

        "& .MuiAutocomplete-listbox": {
          p: 1,
        },

        "& .MuiAutocomplete-option": {
          p: 1,
          borderRadius: 2,
        },

        "& .MuiAutocomplete-paper": {
          bgcolor: "background.paper",
          color: "text.primary",
        },

        ...(mobile ? {} : { maxWidth: 360 }),
      }}
    />
  );

  const renderNavigation = (mobile = false) =>
    navigation.map((item) => {
      const Icon = item.icon;
      const active = isActiveRoute(item.href);

      if (mobile) {
        return (
          <BottomNavigationAction
            key={item.href}
            label={item.label}
            value={item.href}
            icon={<Icon size={20} />}
            onClick={() =>
              handleNavigation(item.href)
            }
            sx={{
              minWidth: 0,
              minHeight: 56,
              color: "text.secondary",

              "&.Mui-selected": {
                color: "primary.main",
              },

              "& .MuiBottomNavigationAction-label": {
                fontSize: "0.7rem",
                fontWeight: 600,
              },
            }}
          />
        );
      }

      return (
        <Button
          key={item.href}
          onClick={() =>
            handleNavigation(item.href)
          }
          startIcon={<Icon size={17} />}
          color={active ? "primary" : "inherit"}
          variant={active ? "outlined" : "text"}
          sx={{
            px: 2,
            py: 1,
            borderRadius: 2.5,
            whiteSpace: "nowrap",
            textTransform: "none",
            fontWeight: 600,

            borderColor: active
              ? "primary.main"
              : "transparent",

            bgcolor: active
              ? "action.selected"
              : "transparent",

            color: active
              ? "primary.main"
              : "text.secondary",
          }}
        >
          {item.label}
        </Button>
      );
    });

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        color="inherit"
        sx={{
          zIndex: theme.zIndex.appBar,
          bgcolor: "background.paper",
          color: "text.primary",
          borderBottom: 1,
          borderColor: "divider",
          backgroundImage: "none",
          transition: "background-color 200ms ease",
        }}
      >
        <Toolbar
          sx={{
            minHeight: { md: 64, xs: 64 },
            maxWidth: 1280,
            width: "100%",
            mx: "auto",
            px: { xs: 2, sm: 3, lg: 4 },
            gap: { xs: 1.5, md: 3 },
          }}
        >
          {renderLogo(!isDesktop)}

          {isDesktop ? (
            <>
              <Box
                component="nav"
                aria-label="Main navigation"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                {renderNavigation()}
              </Box>

              <Box
                sx={{
                  ml: "auto",
                  width: 1,
                  maxWidth: 360,
                }}
              >
                {renderSearch()}
              </Box>

              {renderThemeToggle()}
            </>
          ) : (
            <>
              <Box
                sx={{
                  flex: 1,
                  minWidth: 0,
                }}
              >
                {renderSearch(true)}
              </Box>

              {renderThemeToggle()}
            </>
          )}
        </Toolbar>
      </AppBar>

      {!isDesktop && (
        <Paper
          elevation={8}
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: theme.zIndex.appBar,
            borderRadius: 0,
            borderTop: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
            pb: "env(safe-area-inset-bottom)",
          }}
        >
          <BottomNavigation
            value={
              navigation.find((item) =>
                isActiveRoute(item.href)
              )?.href ?? false
            }
            showLabels
            sx={{
              height: 64,
              bgcolor: "background.paper",
              color: "text.secondary",
            }}
          >
            {renderNavigation(true)}
          </BottomNavigation>
        </Paper>
      )}
    </>
  );
};

export default Navbar;