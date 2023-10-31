import React from "react";

import DocExample from "@site/src/components/DocExample";

import { Link, Slider, Typography } from "@mui/material";

export default function PreviewSlider() {
  return (
    <>
      <DocExample>
        <Slider
          aria-label="Rating"
          defaultValue={30}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={100}
        />
      </DocExample>
      <Typography>
        <Link
          href="/design-system/components/inputs/slider/"
          sx={{ fontWeight: 700 }}
        >
          Slider:
        </Link>
        Allows users to select from a predefined scale of values.
      </Typography>
    </>
  );
}
