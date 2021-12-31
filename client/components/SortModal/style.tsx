import styled from "styled-components";
import theme from "../../themes/default/default";

export const StyledSortModal = styled.div`
  background: ${theme.palette.primary};
  border-radius: 24px;
  padding: 24px 36px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 999;
  box-shadow: 5px 5px 40px ${theme.palette.grayscale[2]};
`;

export const StyledSortOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  gap: 12px;

  & button {
    width: 90px;
  }
`;

export const StyledOverlay = styled.div`
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99;
`;
