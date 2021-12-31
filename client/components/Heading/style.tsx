import styled, { ThemeContext } from "styled-components";
import theme from "../../themes/default/default";
import { Props } from "./types";

export const StyledHeading = styled.h1`
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -1.5px;
  font-family: ${theme.fonts.family.primary};
  font-size: ${({ size }: Props) => theme.fonts.sizes.heading[size]};
  color: ${(props: Props) =>
    !props.color ? theme.palette.secondary : theme.palette[props.color]};
`;
