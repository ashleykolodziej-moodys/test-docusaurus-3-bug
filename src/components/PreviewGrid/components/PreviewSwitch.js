import React from "react";

import DocExample from "@site/src/components/DocExample";

import {
  FormControl,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Link,
  Switch,
  Typography,
} from "@mui/material";

export default function PreviewSwitch() {
  return (
    <>
      <DocExample>
        <FormControl>
          <FormLabel component="legend">Notification settings</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Email"
            />
            <FormControlLabel control={<Switch />} label="Phone" />
          </FormGroup>
        </FormControl>
      </DocExample>
      <Typography>
        <Link
          href="/design-system/components/inputs/switch/"
          sx={{ fontWeight: 700 }}
        >
          Switch:
        </Link>
        Allows users to toggle the state of a setting on or off. Applies
        immediately.
      </Typography>
    </>
  );
}
