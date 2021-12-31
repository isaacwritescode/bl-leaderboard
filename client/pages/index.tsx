/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";
import { useState } from "react";
import { Coins } from "../components/Records/variants/Coins";
import { Level } from "../components/Records/variants/Level";
import { Study } from "../components/Records/variants/Study";
import { LoadingOverlay } from "../components/LoadingOverlay";
import { Badge } from "../components/Badge";
import { SortModal } from "../components/SortModal";
import { sortOptions } from "../utils/constants";
import { useMediaQuery } from "react-responsive";
import { Icon } from "../components/Icon";
import { ScrollIndicator } from "../components/ScrollIndicator";
import { TabSelector } from "../components/TabSelector";
import {
  StyledLayoutGrid,
  StyledHeader,
  StyledBadgeWrapper,
  StyledLeaderboardContainer,
  StyledRecordContainer,
  StyledIconBox,
} from "../styles/index.style";

const Leaderboard: NextPage = () => {
  const [currTabOption, setCurrTabOption] = useState("level");
  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const [currSortOption, setCurrSortOption] = useState("total");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const isLargeDisplay = useMediaQuery({ query: "(min-width: 1500px)" });

  return (
    <StyledLayoutGrid>
      {currTabOption === "study" && (
        <StyledIconBox onClick={() => setIsModalOpen(true)}>
          <Icon type="solid " name="sort-alt" />
        </StyledIconBox>
      )}
      {isModalOpen && (
        <SortModal
          sortOptions={sortOptions}
          currSortOption={currSortOption}
          setCurrSortOption={setCurrSortOption}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <StyledHeader>
        <Heading size="large">Leaderboard</Heading>
        <Paragraph size="medium" color="text">
          Let's see who's been husling today
        </Paragraph>
        <StyledBadgeWrapper>
          <Badge variant="accent">bluelearn.in</Badge>
          <Badge variant="success">beta v1.0</Badge>
        </StyledBadgeWrapper>
      </StyledHeader>
      <StyledLeaderboardContainer>
        <TabSelector
          currTabOption={currTabOption}
          setCurrTabOption={setCurrTabOption}
        />
        <StyledRecordContainer onScroll={() => setUserHasScrolled(true)}>
          {currTabOption === "level" ? (
            <Level isLoading={setIsLoading} isMobile={isMobile} />
          ) : currTabOption === "coins" ? (
            <Coins isLoading={setIsLoading} />
          ) : (
            <Study
              isLoading={setIsLoading}
              currSortOption={currSortOption}
              isLargeDisplay={isLargeDisplay}
            />
          )}
        </StyledRecordContainer>
      </StyledLeaderboardContainer>
      {!userHasScrolled && <ScrollIndicator />}
      {isLoading && <LoadingOverlay />}
    </StyledLayoutGrid>
  );
};

export default Leaderboard;
