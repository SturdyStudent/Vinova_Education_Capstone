import { Button, styled, Typography } from "@mui/material";
import { useState } from "react";

type IYellowButton = {
  children: string | JSX.Element | JSX.Element[] | JSX.Element;
  fontSize?: string;
  padding?: string;
  setFollow?: boolean;
};

function YellowButton({
  children,
  fontSize,
  padding,
  setFollow,
}: IYellowButton) {
  const StyledButton = styled(Button)(() => ({
    borderRadius: "8px",
    border: isFollow
      ? "1px solid #333333"
      : "1px solid var(--primary-500, #FDC600)",
    background: isFollow ? "#333333" : "var(--primary-500, #FDC600)",
    color: isFollow ? "white" : "black",
    /* Shadow/xs */
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    padding: padding || "8px 14px",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    gap: "8px",
    textTransform: "none",
    ":hover": {
      color: "black",
    },
  }));
  const [isFollow, setFollowing] = useState(false);

  const handleFollow = () => setFollowing(!isFollow);

  return (
    <StyledButton onClick={setFollow ? handleFollow : undefined}>
      <Typography fontSize={fontSize || "14px"} fontWeight={600} noWrap>
        {!isFollow ? children : "Following"}
      </Typography>
    </StyledButton>
  );
}

export default YellowButton;
