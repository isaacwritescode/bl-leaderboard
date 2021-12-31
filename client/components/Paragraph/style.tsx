import styled from "styled-components";
import theme from "../../themes/default/default";
import { Props } from "./types";

export const StyledParagraph = styled.p`
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.5px;
  font-family: ${theme.fonts.family.primary};
  font-size: ${(props: Props) => theme.fonts.sizes.paragraph[props.size]};
  color: ${(props: Props) =>
    !props.color ? theme.palette.secondary : theme.palette[props.color]};
`;
