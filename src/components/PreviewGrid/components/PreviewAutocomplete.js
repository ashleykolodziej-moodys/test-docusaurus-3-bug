import React from "react";

import DocExample from "@site/src/components/DocExample";

import { Autocomplete, Link, TextField, Typography } from "@mui/material";

export default function PreviewAutocomplete() {
  return (
    <>
      <DocExample>
        <Autocomplete
          disablePortal
          id="autocomplete-demo"
          size="medium"
          options={[
            { label: "Corporates" },
            { label: "Financial Institutions" },
            { label: "Funds & Asset Management" },
            { label: "Infrastructure & Project Finance" },
            { label: "Insurance" },
            { label: "Sovereign & Supranational" },
            { label: "Structured Finance" },
            { label: "Sub-Sovereign" },
            { label: "U.S. Public Finance" },
          ]}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Sector" />}
        />
      </DocExample>
      <Typography>
        <Link
          href="/design-system/components/inputs/autocomplete/"
          sx={{ fontWeight: 700 }}
        >
          Autocomplete:
        </Link>
        Allows users to quickly search and select from a list of many items.
      </Typography>
    </>
  );
}
