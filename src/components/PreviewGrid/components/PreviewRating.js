import React from "react";

import DocExample from "@site/src/components/DocExample";

import { Link, Rating, Typography } from "@mui/material";

export default function PreviewRating() {
  const [value, setValue] = React.useState(3);

  return (
    <>
      <DocExample>
        <Typography component="legend">
          How would you rate the accuracy of this response?
        </Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </DocExample>
      <Typography>
        <Link
          href="/design-system/components/inputs/rating/"
          sx={{ fontWeight: 700 }}
        >
          Rating:
        </Link>
        Allows users to provide feedback on product experience during or just
        after an interaction.
      </Typography>
    </>
  );
}
