import { FC } from "react";
import { ISectionProps } from "interfaces";

import { SectionWrap, TitleWrap } from "./Section.styled";
import { Typography } from "@mui/material";

export const Section: FC<ISectionProps> = ({
  title,
  children,
  headerContent,
}) => {
  return (
    <SectionWrap sx={{ width: { xs: "300px", sm: "500px" } }}>
      <TitleWrap>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Helvetica",
            fontSize: { xs: "22px", sm: "24px" },
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          {title}
        </Typography>
        {headerContent}
      </TitleWrap>
      {children}
    </SectionWrap>
  );
};
