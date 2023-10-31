import React from "react";

import DocExample from "@site/src/components/DocExample";

import {
  Link,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

export default function PreviewToggleButtonGroup() {
  return (
    <>
      <DocExample>
        <ToggleButtonGroup
          variant="contained"
          exclusive
          aria-label="Toggle Button Group Example"
        >
          <ToggleButton value="usd" selected={true}>
            USD
          </ToggleButton>
          <ToggleButton value="euro">Euro</ToggleButton>
        </ToggleButtonGroup>
      </DocExample>
      <Typography>
        <Link
          href="/design-system/components/inputs/toggle-button/"
          sx={{ fontWeight: 700 }}
        >
          Toggle Button Group:
        </Link>
        Allows users to select which, in a group of related options, is
        selected.
      </Typography>
    </>
  );
}
