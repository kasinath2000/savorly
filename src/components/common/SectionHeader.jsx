
import {
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";

import { ArrowRight } from "lucide-react";

const SectionHeader = ({
  eyebrow,
  title,
  description,
  actionLabel,
  onAction,
}) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems={{ xs: "stretch", sm: "flex-end" }}
      justifyContent="space-between"
      spacing={2}
      sx={{ mb: { xs: 3, sm: 4 } }}
    >
      <Box sx={{ minWidth: 0, flex: 1 }}>
        {eyebrow && (
          <Typography
            variant="overline"
            sx={{
              display: "block",
              mb: 1,
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: "0.12em",
              lineHeight: 1.5,
            }}
          >
            {eyebrow}
          </Typography>
        )}

        <Typography
          component="h2"
          variant="h4"
          sx={{
            fontWeight: 800,
            fontSize: {
              xs: "1.5rem",
              sm: "1.85rem",
              md: "2rem",
            },
            lineHeight: 1.2,
            letterSpacing: "-0.035em",
            overflowWrap: "anywhere",
          }}
        >
          {title}
        </Typography>

        {description && (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mt: 1,
              maxWidth: 600,
              lineHeight: 1.7,
            }}
          >
            {description}
          </Typography>
        )}
      </Box>

      {actionLabel && onAction && (
        <Button
          onClick={onAction}
          variant="text"
          color="primary"
          endIcon={<ArrowRight size={18} aria-hidden="true" />}
          sx={{
            alignSelf: {
              xs: "flex-start",
              sm: "auto",
            },
            flexShrink: 0,
            fontWeight: 700,
            textTransform: "none",
            whiteSpace: "nowrap",
            "& .MuiButton-endIcon": {
              transition: "transform 200ms ease",
            },
            "&:hover .MuiButton-endIcon": {
              transform: "translateX(3px)",
            },
            "&:focus-visible": {
              outline: "2px solid",
              outlineColor: "primary.main",
              outlineOffset: 3,
            },
          }}
        >
          {actionLabel}
        </Button>
      )}
    </Stack>
  );
};

export default SectionHeader;
