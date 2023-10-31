import React from "react";

import DocExample from "@site/src/components/DocExample";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

export default function PreviewRadioGroup() {
  return (
    <>
      <DocExample>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Preferred method of contact:
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="email"
            name="radio-buttons-group"
          >
            <FormControlLabel value="email" control={<Radio />} label="Email" />
            <FormControlLabel value="phone" control={<Radio />} label="Phone" />
            <FormControlLabel value="mail" control={<Radio />} label="Mail" />
          </RadioGroup>
        </FormControl>
      </DocExample>
      <Typography>
        <Link
          href="/design-system/components/inputs/radio/"
          sx={{ fontWeight: 700 }}
        >
          Radio Group:
        </Link>
        Allows users to select only one item from a set. Recommended for 5
        options or fewer.
      </Typography>
    </>
  );
}
