import { Dispatch, SetStateAction } from "react";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { StyledOverlay } from "../LoadingOverlay/style";
import { StyledSortModal, StyledSortOptions } from "./style";

interface Props {
  sortOptions: string[];
  currSortOption: string;
  setCurrSortOption: Dispatch<SetStateAction<string>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const SortModal = ({
  sortOptions,
  currSortOption,
  setCurrSortOption,
  setIsModalOpen,
}: Props) => {
  return (
    <StyledOverlay onClick={() => setIsModalOpen(false)}>
      <StyledSortModal>
        <Heading color="secondary" size="small">
          Sort by :
        </Heading>
        <StyledSortOptions>
          {sortOptions.map((elem, idx) => (
            <Button
              color={currSortOption === elem ? "secondary" : "outline"}
              key={idx}
              onClick={() => {
                setCurrSortOption(elem);
              }}
            >
              {elem}
            </Button>
          ))}
        </StyledSortOptions>
      </StyledSortModal>
    </StyledOverlay>
  );
};
