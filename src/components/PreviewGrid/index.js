import React, { Suspense } from "react";

import { Box } from "@mui/material";

import DocExample from "@site/src/components/DocExample";

function PreviewLoadComponent({ name }) {
  const Component = React.lazy(() =>
    import(`./components/Preview${name}`).catch(() => ({
      default: () => <></>,
    }))
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}

function PreviewGridItem({ name }) {
  return (
    <Box
      className="mdc-preview-grid-item"
      sx={{
        display: "grid",
        gap: 1,
        gridTemplateRows: "subgrid",
        gridRow: "span 2",
      }}
    >
      <PreviewLoadComponent name={name} />
    </Box>
  );
}

export default function PreviewGrid({ items }) {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          columnGap: 2,
          rowGap: 2,
        }}
      >
        {items.map((itemName, value) => (
          <PreviewGridItem key={value} name={itemName} />
        ))}
      </Box>
    </>
  );
}
