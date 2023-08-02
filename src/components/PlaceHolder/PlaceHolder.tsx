import { Box } from "@mui/material";

interface IPlaceHolder {
  height?: number;
}

function PlaceHolder({ height }: IPlaceHolder) {
  return <Box height={`${height || 21}px`} />;
}

export default PlaceHolder;
