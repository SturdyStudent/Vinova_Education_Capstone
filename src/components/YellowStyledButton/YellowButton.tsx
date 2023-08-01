import { Button, styled, Typography } from "@mui/material";

type IYellowButton = {
  children: string | JSX.Element | JSX.Element[] | JSX.Element;
  fontSize?: string;
  padding?: string;
};

function YellowButton({ children, fontSize, padding }: IYellowButton) {
  const StyledButton = styled(Button)(() => ({
    borderRadius: "8px",
    border: "1px solid var(--primary-500, #FDC600)",
    background: "var(--primary-500, #FDC600)",

    /* Shadow/xs */
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    padding: padding || "8px 14px",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    gap: "8px",
    textTransform: "none",
  }));
  return (
    <StyledButton>
      <Typography fontSize={fontSize || "14px"} fontWeight={600}>
        {children}
      </Typography>
    </StyledButton>
  );
}

export default YellowButton;
