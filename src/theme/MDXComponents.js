import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import * as Mui from "@mui/material";

// Import all MUI icons for convenience.
import * as MuiIcons from "@mui/icons-material";

import DocExample from "@site/src/components/DocExample";
import ExampleGrid from "@site/src/components/ExampleGrid";
import Figma from "@site/src/components/Figma";
import {
  PropsTable,
  PropsTableKey,
  PropsTableValue,
} from "@site/src/components/PropsTable";
import RedLine from "@site/src/components/RedLine";
import Stackblitz from "@site/src/components/Stackblitz";

export default {
  // Adds custom editor components
  DocExample,
  ExampleGrid,
  Figma,
  PropsTable,
  PropsTableKey,
  PropsTableValue,
  RedLine,
  Stackblitz,

  // Re-use the default mapping
  ...MDXComponents,
  HomepageFeatures,
  // Map the "<Button>" tag to our Button component
  // `Button` will receive all props that were passed to `<Button>` in MDX
  ...MuiIcons,
  ...Mui
};