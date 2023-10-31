import React, { useState } from "react";
import { useColorMode } from "@docusaurus/theme-common";

import {
  Box,
  Button,
  Card,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import {
  CheckCircle,
  Dangerous,
  FormatAlignLeft,
  SimCardDownload,
} from "@mui/icons-material";

const supportedComponents = {
  Box,
  Button,
  IconButton,
  Stack,
  FormatAlignLeft,
  SimCardDownload,
};

function DocExampleMarkup({ children, mode, type }) {
  return (
    <>
      <Card
        sx={{
          borderTop: type !== "preview" ? 5 : 0,
          borderColor: type !== "preview" ? `${type}.main` : "",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
        }}
      >
        {type === "success" && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="caption">Better to use</Typography>
            <CheckCircle color="success" />
          </Stack>
        )}
        {type === "error" && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="caption">Try to avoid</Typography>
            <Dangerous color="error" />
          </Stack>
        )}
        <Stack
          spacing={1}
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          useFlexGap
          paddingTop={6}
          paddingBottom={6}
          alignItems="center"
          flexGrow="1"
        >
          {children}
        </Stack>
      </Card>
    </>
  );
}

export default function DocExample({ children, showDarkMode, type }) {
  const { colorMode } = useColorMode();
  const inverseColorMode = colorMode === "light" ? "dark" : "light";

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        columnGap: 2,
        rowGap: 2,
      }}
    >
      <Stack>
        {showDarkMode && (
          <Typography variant="overline">{colorMode} theme</Typography>
        )}
        <DocExampleMarkup type={type}>{children}</DocExampleMarkup>
      </Stack>

      {showDarkMode && (
        <Stack>
          <Typography variant="overline">{inverseColorMode} theme</Typography>
          <DocExampleMarkup type={type}>{children}</DocExampleMarkup>
        </Stack>
      )}
    </Box>
  );
}
