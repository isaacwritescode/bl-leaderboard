import { StyledParagraph } from "./style";
import { Props } from "./types";

export const Paragraph = ({ children, color, size }: Props) => {
  return (
    <StyledParagraph color={color} size={size}>
      {children}
    </StyledParagraph>
  );
};
