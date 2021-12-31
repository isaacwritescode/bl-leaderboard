import { StyledHeading } from "./style";
import { Props } from "./types";

const Heading = ({ children, color, size }: Props) => {
  return (
    <StyledHeading color={color} size={size}>
      {children}
    </StyledHeading>
  );
};

export { Heading };
