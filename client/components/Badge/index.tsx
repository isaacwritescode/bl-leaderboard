import { Paragraph } from "../Paragraph";
import { StyledBadge } from "./style";
import { Props } from "./types";

export const Badge = ({ children, variant }: Props) => {
  return (
    <StyledBadge variant={variant} >
      <Paragraph size="small">{children}</Paragraph>
    </StyledBadge>
  );
};
