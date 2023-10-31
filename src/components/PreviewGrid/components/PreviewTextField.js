import React from "react";

import DocExample from "@site/src/components/DocExample";

import { Link, TextField, Typography } from "@mui/material";

export default function PreviewTextField() {
  return (
    <>
      <DocExample>
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
      </DocExample>
      <Typography>
        <Link
          href="/design-system/components/inputs/text/"
          sx={{ fontWeight: 700 }}
        >
          Text Field:
        </Link>
        Allows users to freely enter and edit text. Recommended for inputs where
        a list of options would be impractical due to large amounts of valid
        values, such as names or dates.
      </Typography>
    </>
  );
}
