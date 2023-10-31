import React from "react";

import { Box, Chip, Paper, Stack, Typography } from "@mui/material";

export default function RedLine({ children, ...props }) {
  const colorByType = {
    componentNote: "#cc0000",
    patternNote: "#cc0000",
    templateNote: "#cc0000",
  };

  return (
    <Stack
      className="redline"
      p={1}
      spacing={1}
      useFlexGap
      sx={{
        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23${(props.type
          ? colorByType[props.type]
          : colorByType["componentNote"]
        ).substring(
          1
        )}' stroke-width='2' stroke-dasharray='4%2c 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
        position: "relative",
      }}
    >
      {props.name && (
        <Chip
          label={props.name}
          sx={{
            backgroundColor: colorByType[props.type],
            color: colors.globalWhite,
            alignSelf: "center",
          }}
          size="small"
        />
      )}
      {props.note && (
        <Typography
          variant="footnote"
          align="center"
          sx={{
            display: "block",
            marginBottom: 0,
          }}
        >
          {props.note}
        </Typography>
      )}
      {children}
    </Stack>
  );
}
