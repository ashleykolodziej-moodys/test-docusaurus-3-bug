import React from "react";

import DocExample from "@site/src/components/DocExample";

import { Link, Typography } from "@mui/material";

import { DateRange } from "@moodys/mdc-frontend.widgets.date-range";

export default function PreviewDateRange() {
  const handleDateChange = (from, to) => {
    // The preview doesn't need to do anything with this,
    // but the function is still necessary for the input to
    // update with the proper value.
    return;
  };

  return (
    <>
      <DocExample>
        <DateRange handleDateChange={handleDateChange} />
      </DocExample>
      <Typography>
        <Link
          href="/design-system/components/inputs/date-range/"
          sx={{ fontWeight: 700 }}
        >
          Date Range:
        </Link>
        Helps users quickly select common date ranges, such as past month, or a
        custom range of their choosing.
      </Typography>
    </>
  );
}
