import styled from "styled-components";
import theme from "../../themes/default/default";

interface Props {
  odd?: Boolean;
}

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: [index] 30px [username] auto [group] max-content;
  justify-items: start;
  align-items: center;
  box-sizing: border-box;
  padding: 16px 30px;
  background: ${(props: Props) =>
    props?.odd ? "#f4f3f7" : theme.palette.primary};

  &:first-child {
    text-transform: uppercase;
  }
`;

const StyledBoxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100px);
  justify-items: end;
  gap: 4vw;
`;

const StyledBoxGroupLarge = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 100px);
  justify-items: end;
  gap: 2vw;
`;

const StyledBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export { StyledBox, StyledRow, StyledBoxGroup, StyledBoxGroupLarge };
