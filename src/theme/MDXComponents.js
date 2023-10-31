import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import * as Mui from "@mui/material";

// Import all MUI icons for convenience.
import * as MuiIcons from "@mui/icons-material";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  HomepageFeatures,
  // Map the "<Button>" tag to our Button component
  // `Button` will receive all props that were passed to `<Button>` in MDX
  ...MuiIcons,
  ...Mui
};