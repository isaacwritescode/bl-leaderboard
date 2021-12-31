import styled from "styled-components";

const StyledOverlay = styled.div`
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

const StyledWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
  background: white;
  padding: 16px 80px 16px 16px;
  border-radius: 24px;
`;

export { StyledOverlay, StyledWrapper };
