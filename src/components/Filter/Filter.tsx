import { FC } from "react";
import { IFilterProps } from "interfaces";

import { Box } from "@mui/material";
import { FilterLabel, FilterInput } from "./Filter.styled";

export const Filter: FC<IFilterProps> = ({ value, onChange }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <FilterInput
        type="text"
        placeholder=""
        value={value}
        onChange={onChange}
      ></FilterInput>
      <FilterLabel>Find contacts by name</FilterLabel>
    </Box>
  );
};
