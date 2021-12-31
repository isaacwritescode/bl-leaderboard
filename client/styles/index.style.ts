import styled from "styled-components";
import theme from "../themes/default/default";

 const StyledIconBox = styled.div`
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border: 1px solid ${theme.palette.text};
  border-radius: 14px;
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  cursor: pointer;
`;

const StyledLayoutGrid = styled.div`
  height: 100vh;
  text-align: center;
  display: grid;
  grid-template-rows: 210px auto;
  align-items: center;
`;

const StyledHeader = styled.header`
  padding: 40px 0 0px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: auto;
  align-items: center;
`;

const StyledLeaderboardContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 72px auto;
  gap: 24px;
  overflow: hidden;

  @media screen and (min-width: 700px) {
    width: 80%;
    margin: auto;
    gap: 0;
  }
`;

 const StyledRecordContainer = styled.div`
  height: 100%;
  background: ${theme.palette.primary};
  overflow-y: scroll;
  border-radius: 24px 24px 0 0;

  & > :first-child {
    position: sticky;
    top: 0;
    z-index: 9;
    padding: 24px 30px;
    border-bottom: 1.5px solid ${theme.palette.grayscale[5]};
    box-shadow: 10px 10px 50px #e6e7f0;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 700px) {
    border-radius: 0 24px 0 0;
  }
`;

 const StyledBadgeWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
`;

export {StyledIconBox, StyledLayoutGrid, StyledHeader, StyledLeaderboardContainer, StyledRecordContainer, StyledBadgeWrapper}