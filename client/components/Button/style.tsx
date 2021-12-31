import styled from "styled-components";
import theme from "../../themes/default/default";
import { Props } from "./types";

export const StyledBtn = styled.button`
  height: 40px;
  width: 72px;
  outline: none;
  border: none;
  border-radius: 12px;
  text-transform: capitalize;
  border: ${(props: Props) =>
    props.color === "outline" ? `1.2px solid ${theme.palette.text} ` : "none"};
  background: ${(props: Props) =>
    !props.color
      ? theme.palette.accent
      : props.color === "outline"
      ? "transparent"
      : theme.palette[props.color]};
  & p {
    color: ${(props: Props) =>
      (props.color && props.color === "primary") || props.color === "outline"
        ? theme.palette.secondary
        : theme.palette.primary};
  }

  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    ${(props: Props) =>
      props.color === "outline" && `background: ${theme.palette.grayscale[6]}`}
  }
`;
