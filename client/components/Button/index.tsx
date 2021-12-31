import { Paragraph } from "../Paragraph";
import { StyledBtn } from "./style";
import { Props } from "./types";

export const Button = ({ children, ...props }: Props) => {
  return (
    <StyledBtn {...props}>
      <Paragraph size="medium">{children}</Paragraph>
    </StyledBtn>
  );
};
