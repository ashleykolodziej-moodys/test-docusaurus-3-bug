import React from "react";

import DocExample from "@site/src/components/DocExample";

import { Chip, Link, Typography } from "@mui/material";

import { CheckCircleOutline } from "@mui/icons-material";

export default function PreviewChip() {
  return (
    <>
      <DocExample>
        <Chip variant="outlined" color="primary" label="Cities" />
        <Chip
          variant="outlined"
          color="primary"
          label="New York City"
          onDelete={() => {
            return;
          }}
        />
        <Chip icon={<CheckCircleOutline />} label="Open" />
      </DocExample>
      <Typography>
        <Link
          href="/design-system/components/data-display/chip/"
          sx={{ fontWeight: 700 }}
        >
          Chip:
        </Link>
        Represents the status of a user option or a particularly important piece
        of metadata, such as a list of compatible items.
      </Typography>
    </>
  );
}
