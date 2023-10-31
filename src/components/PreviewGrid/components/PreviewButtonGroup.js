import React from "react";

import DocExample from "@site/src/components/DocExample";

import { Button, ButtonGroup, Link, Typography } from "@mui/material";

export default function PreviewButtonGroup() {
  return (
    <>
      <DocExample>
        <ButtonGroup variant="outlined" aria-label="Button Group Example">
          <Button>Save</Button>
          <Button>Export</Button>
        </ButtonGroup>
      </DocExample>
      <Typography>
        <Link
          href="/design-system/components/inputs/button-group/"
          sx={{ fontWeight: 700 }}
        >
          Button Group:
        </Link>
        Ties multiple related buttons to a single action.
      </Typography>
    </>
  );
}
