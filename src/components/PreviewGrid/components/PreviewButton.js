import React from "react";

import DocExample from "@site/src/components/DocExample";

import { Button, Link, Stack, Typography } from "@mui/material";

export default function PreviewButton() {
  return (
    <>
      <DocExample>
        <Button variant="contained">Latest Research</Button>
      </DocExample>
      <Typography>
        <Link
          href="/design-system/components/inputs/button/"
          sx={{ fontWeight: 700 }}
        >
          Button:
        </Link>
        Helps users take an action on the page they are interacting with.
      </Typography>
    </>
  );
}
