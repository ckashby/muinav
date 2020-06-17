import React from "react";
import Box from "@material-ui/core/Box";

const defaultProps = {
  border: 1,
  m: 3,
  style: { width: "5rem", height: "5rem" },
};

export default function Boxes() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Box borderColor="primary.main" {...defaultProps}>
          One
        </Box>
        <Box borderColor="secondary.main" {...defaultProps}>
          Two
        </Box>
        <Box borderColor="error.main" {...defaultProps}>
          Three
        </Box>
        <Box borderRadius="50%" {...defaultProps} />
        <Box borderRadius="borderRadius" {...defaultProps} />
        <Box borderRadius={16} {...defaultProps} />
      </Box>
      <div style={{ width: "100%" }}>
        <Box
          component="span"
          display="block"
          p={1}
          m={1}
          bgcolor="background.paper"
          border="3px solid green"
        >
          block
        </Box>
        <Box
          component="span"
          display="block"
          p={1}
          m={1}
          bgcolor="background.paper"
          border="3px solid blue"
        >
          block
        </Box>
      </div>
    </>
  );
}
