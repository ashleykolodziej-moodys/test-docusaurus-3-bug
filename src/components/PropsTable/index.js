import React, { Children } from "react";

import {
  Box,
  Link,
  Table,
  TableHead,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
} from "@mui/material";

export function PropsTableValue({ propvalue, children }) {
  return (
    <>
      <TableCell>
        {propvalue === "icon" ? (
          <>
            Any{" "}
            <Link href="https://mui.com/material-ui/material-icons/">
              Material Icon component
            </Link>
          </>
        ) : (
          propvalue
        )}
      </TableCell>
      <TableCell>{children}</TableCell>
    </>
  );
}

export function PropsTableKey({ propkey, children }) {
  const totalChildren = children.length;

  return (
    <>
      {Children.map(children, (child, i) => {
        return (
          <TableRow>
            {i === 0 && (
              <TableCell component="th" scope="row" rowSpan={totalChildren}>
                <Box component="code">{propkey}</Box>
              </TableCell>
            )}
            {child}
          </TableRow>
        );
      })}
    </>
  );
}

export function PropsTable({ children }) {
  return (
    <TableContainer>
      <Table size="small" aria-label="Properties table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700 }}>Key</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Value</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Usage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
}
