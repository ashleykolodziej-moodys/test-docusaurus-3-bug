import React from "react";

import DocExample from "@site/src/components/DocExample";

import { Link, Tab, Tabs, Typography } from "@mui/material";

export default function PreviewToggleButtonGroup() {
  return (
    <>
      <DocExample>
        <Tabs variant="contained" aria-label="Basic tabs example" value="0">
          <Tab label="Latest Issuance" value="0" />
          <Tab label="Rating Activity" value="1" />
        </Tabs>
      </DocExample>
      <Typography>
        <Link
          href="/design-system/components/navigation/tabs/"
          sx={{ fontWeight: 700 }}
        >
          Tabs:
        </Link>
        Allows a user to switch between multiple significantly different views
        of information which are related by a common theme, set of content, or
        dataset.
      </Typography>
    </>
  );
}
