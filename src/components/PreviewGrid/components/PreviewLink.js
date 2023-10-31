import React from "react";

import DocExample from "@site/src/components/DocExample";

import { Link, Typography } from "@mui/material";

export default function PreviewLink() {
  return (
    <>
      <DocExample>
        <Link href="#">Risks going into next year</Link>
        <Link href="#" color="inherit" underline="hover">
          Company Overview
        </Link>
      </DocExample>
      <Typography>
        <Link
          href="/design-system/components/navigation/link/"
          sx={{ fontWeight: 700 }}
        >
          Link:
        </Link>
        Navigates users to a new page, either inline with text, or as part of a
        menu.
      </Typography>
    </>
  );
}
