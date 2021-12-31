import styled from "styled-components";
import theme from "../../themes/default/default";

export const StyledScrollIndicatorBlock = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 99;
  background: ${theme.palette.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 10px 90px ${theme.palette.text};
`;