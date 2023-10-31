import React from "react";

import DocExample from "@site/src/components/DocExample";

import { Link, ToggleButton, Typography } from "@mui/material";

import { LanguageOutlined } from "@mui/icons-material";

export default function PreviewToggleButton() {
  return (
    <>
      <DocExample>
        <ToggleButton value="check" selected={false}>
          <LanguageOutlined />
        </ToggleButton>
      </DocExample>
      <Typography>
        <Link
          href="/design-system/components/inputs/toggle-button/"
          sx={{ fontWeight: 700 }}
        >
          Toggle Button:
        </Link>
        Allows users to turn a single option on or off.
      </Typography>
    </>
  );
}
