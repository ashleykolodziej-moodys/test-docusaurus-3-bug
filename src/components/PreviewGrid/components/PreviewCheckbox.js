import React from "react";

import DocExample from "@site/src/components/DocExample";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Link,
  Typography,
} from "@mui/material";

export default function PreviewCheckbox() {
  return (
    <>
      <DocExample>
        <FormControl>
          <FormLabel component="legend">Filter by:</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="US Markets"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="International Markets"
            />
          </FormGroup>
        </FormControl>
      </DocExample>
      <Typography>
        <Link
          href="/design-system/components/inputs/checkbox/"
          sx={{ fontWeight: 700 }}
        >
          Checkbox:
        </Link>
        Allows users to select one or many items from a set. Can optionally be
        nested in a list.
      </Typography>
    </>
  );
}
