import React from "react";
import Box from "@mui/material/Box";
import { ColorModeProvider } from "@docusaurus/theme-common/internal";

export default function ExampleGrid({ children }) {
  return (
    <ColorModeProvider>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            sm: "repeat(2, 1fr)",
          },
          gap: 2,
        }}
      >
        {children}
      </Box>
    </ColorModeProvider>
  );
}
