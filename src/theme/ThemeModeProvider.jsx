
import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import {
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const ThemeModeContext = createContext(null);

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error(
      "useThemeMode must be used inside ThemeModeProvider"
    );
  }

  return context;
};

const getInitialMode = () => {
  try {
    return localStorage.getItem("savorly-theme") === "dark"
      ? "dark"
      : "light";
  } catch {
    return "light";
  }
};

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState(getInitialMode);

  const toggleTheme = () => {
    setMode((previousMode) => {
      const nextMode =
        previousMode === "light" ? "dark" : "light";

      try {
        localStorage.setItem("savorly-theme", nextMode);
      } catch {
        // Theme switching works even if storage is unavailable.
      }

      return nextMode;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,

          primary: {
            main: "#D97745",
            contrastText: "#FFFFFF",
          },

          background:
            mode === "dark"
              ? {
                  default: "#171412",
                  paper: "#211D1A",
                }
              : {
                  default: "#FAF8F5",
                  paper: "#FFFFFF",
                },

          text:
            mode === "dark"
              ? {
                  primary: "#F5F0EB",
                  secondary: "#B8ACA3",
                }
              : {
                  primary: "#29221E",
                  secondary: "#756B64",
                },

          divider:
            mode === "dark"
              ? "rgba(255, 255, 255, 0.12)"
              : "rgba(41, 34, 30, 0.12)",

          action:
            mode === "dark"
              ? {
                  hover: "rgba(255, 255, 255, 0.06)",
                  selected: "rgba(217, 119, 69, 0.16)",
                  active: "#F5F0EB",
                }
              : {
                  hover: "rgba(41, 34, 30, 0.04)",
                  selected: "rgba(217, 119, 69, 0.10)",
                  active: "#29221E",
                },
        },

        shape: {
          borderRadius: 12,
        },

        typography: {
          fontFamily: [
            "Inter",
            "Roboto",
            "Arial",
            "sans-serif",
          ].join(","),
        },

        components: {
          MuiCssBaseline: {
            styleOverrides: {
              html: {
                minHeight: "100%",
                backgroundColor:
                  mode === "dark" ? "#171412" : "#FAF8F5",
              },

              body: {
                minHeight: "100vh",
                margin: 0,
                backgroundColor:
                  mode === "dark" ? "#171412" : "#FAF8F5",
                color:
                  mode === "dark" ? "#F5F0EB" : "#29221E",
                transition:
                  "background-color 200ms ease, color 200ms ease",
              },

              "#root": {
                minHeight: "100vh",
              },

              "*": {
                boxSizing: "border-box",
                scrollbarColor:
                  mode === "dark"
                    ? "#51453D #171412"
                    : "#C8BDB4 #FAF8F5",
              },
            },
          },

          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: "none",
              },
            },
          },

          MuiCard: {
            styleOverrides: {
              root: {
                backgroundImage: "none",
              },
            },
          },

          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundImage: "none",
              },
            },
          },
        },
      }),
    [mode]
  );

  const contextValue = useMemo(
    () => ({
      mode,
      toggleTheme,
    }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
