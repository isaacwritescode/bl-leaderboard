import styled from "styled-components";
import theme from "../../themes/default/default";

export const StyledTabSelector = styled.div`
  width: 220px;
  display: flex;
  background ${theme.palette.primary}; 
  border-radius: 14px;
  padding: 12px;
  margin: auto;

  @media screen and (min-width: 700px) {
    border-radius: 0;
    padding: 16px;
    margin: 0;
    width: 320px;
    background: url("/images/top-panel.svg") bottom left no-repeat;
  }
`;
