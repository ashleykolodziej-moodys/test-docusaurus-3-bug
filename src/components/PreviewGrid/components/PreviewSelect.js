import React from "react";

import DocExample from "@site/src/components/DocExample";

import {
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export default function PreviewSelect() {
  return (
    <>
      <DocExample>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Product</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            label="Product"
          >
            <MenuItem value={10}>Company Pages</MenuItem>
            <MenuItem value={20}>Screener</MenuItem>
            <MenuItem value={20}>Sector Views</MenuItem>
          </Select>
        </FormControl>
      </DocExample>
      <Typography>
        <Link
          href="/design-system/components/inputs/select/"
          sx={{ fontWeight: 700 }}
        >
          Select:
        </Link>
        Allows users to select only one item from a set. Recommended for 6 to 10
        options.
      </Typography>
    </>
  );
}
