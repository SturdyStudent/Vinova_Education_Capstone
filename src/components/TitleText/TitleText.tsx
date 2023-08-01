import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface ITitleText {
  children: ReactNode;
  lineNumber?: number;
  fontSize?: string;
  lineHeight?: string;
}

function TitleText({ children, lineNumber, fontSize, lineHeight }: ITitleText) {
  return (
    <Typography
      fontSize={fontSize || "14px"}
      fontWeight={600}
      color={"#1A1A1A"}
      lineHeight={lineHeight || "20px"}
      textOverflow={"ellipsis"}
      display={"-webkit-box"}
      textAlign={"left"}
      sx={{
        WebkitLineClamp: lineNumber || 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        lineBreak: "anywhere",
      }}
    >
      {children}
    </Typography>
  );
}

export default TitleText;
