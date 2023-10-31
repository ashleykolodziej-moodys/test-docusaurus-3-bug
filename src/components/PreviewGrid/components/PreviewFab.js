import React from "react";

import DocExample from "@site/src/components/DocExample";

import { Fab, Link, Stack, Typography } from "@mui/material";

import { AutoAwesome } from "@mui/icons-material";

export default function PreviewFab() {
  return (
    <>
      <DocExample>
        <Stack gap={2} direction="row">
          <Fab color="primary" aria-label="Launch Copilot">
            <AutoAwesome />
          </Fab>
          <Fab color="primary" variant="extended" aria-label="Launch Copilot">
            <AutoAwesome />
            Copilot
          </Fab>
        </Stack>
      </DocExample>
      <Typography>
        <Link
          href="/design-system/components/inputs/floating-action-button/"
          sx={{ fontWeight: 700 }}
        >
          Fab:
        </Link>
        Gives users easy access to a key piece of functionality by placing it
        above all other interface elements, typically in the lower right corner.
      </Typography>
    </>
  );
}
