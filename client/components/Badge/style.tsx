import styled from "styled-components";
import theme from "../../themes/default/default";
import { Props } from "./types";

export const StyledBadge = styled.div`
  background: ${({ variant }: Props) => theme.palette[variant]};
  padding: 2px 8px;
  border-radius: 100px;
  width: fit-content;
  margin: 8px 0;

  & p {
    color: ${theme.palette.primary};
  }
`;
