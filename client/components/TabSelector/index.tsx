import React, { Dispatch, SetStateAction } from "react";
import { statCategories } from "../../utils/constants";
import { Button } from "../Button";
import { StyledTabSelector } from "./style";

interface Props {
  currTabOption: string;
  setCurrTabOption: Dispatch<SetStateAction<string>>;
}

export const TabSelector = ({ currTabOption, setCurrTabOption }: Props) => {
  return (
    <StyledTabSelector>
      {statCategories.map((elem, idx) => (
        <Button
          key={idx}
          color={currTabOption === elem ? "secondary" : "primary"}
          onClick={() => setCurrTabOption(elem)}
        >
          {elem}
        </Button>
      ))}
    </StyledTabSelector>
  );
};
