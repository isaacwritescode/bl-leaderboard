import Image from "next/image";
import { Paragraph } from "../../Paragraph";
import { AvatarGenerator } from "random-avatar-generator";
import { useAllLevelQuery } from "../../../generated/graphql";
import { calcLevel } from "../../../utils/calcLevel";
import { Dispatch, Fragment, SetStateAction, useEffect } from "react";
import { StyledBox, StyledBoxGroup, StyledRow } from "../style";
import { textShortner } from "../../../utils/textShortner";

interface Props {
  isLoading: Dispatch<SetStateAction<boolean>>;
  isMobile: Boolean;
}

export const Level = ({ isLoading, isMobile }: Props) => {
  const generator = new AvatarGenerator();
  const [{ data, fetching }] = useAllLevelQuery();

  useEffect(() => {
    if (fetching) {
      isLoading(true);
    } else if (!data?.allLevel) {
    } else {
      setTimeout(() => {
        isLoading(false);
      }, 1000);
    }
  }, [fetching, isLoading, data?.allLevel]);

  return (
    <Fragment>
      <StyledRow>
        <Paragraph size="medium">#</Paragraph>
        <Paragraph size="medium">username</Paragraph>
        {!isMobile ? (
          <StyledBoxGroup>
            <Paragraph size="medium">xp</Paragraph>
            <Paragraph size="medium">lvl</Paragraph>
          </StyledBoxGroup>
        ) : (
          <Paragraph size="medium">lvl</Paragraph>
        )}
      </StyledRow>
      {!data?.allLevel
        ? null
        : data.allLevel.map(({ user_ID, xp }, idx) => {
            const src = generator.generateRandomAvatar();

            return (
              <StyledRow key={idx} odd={idx % 2 !== 0}>
                <Paragraph size="medium">{idx + 1}.</Paragraph>
                <StyledBox>
                  <Image
                    loader={() => src}
                    src={src}
                    alt="user-avatar"
                    width={32}
                    height={32}
                    unoptimized
                  />
                  <Paragraph size="medium">
                    {user_ID}
                    {/* {isMobile ? textShortner(username) : username} */}
                  </Paragraph>
                </StyledBox>
                {!isMobile ? (
                  <StyledBoxGroup>
                    <StyledBox>
                      <Paragraph size="medium">
                        {xp.toLocaleString("en-IN")}
                      </Paragraph>
                      <Image
                        src="/images/star.svg"
                        alt="xp-count"
                        width={22}
                        height={22}
                      />
                    </StyledBox>
                    <StyledBox>
                      <Paragraph size="medium">{calcLevel(xp)}</Paragraph>
                      <Image
                        src="/images/level.png"
                        alt="level-count"
                        width={22}
                        height={22}
                      />
                    </StyledBox>
                  </StyledBoxGroup>
                ) : (
                  <StyledBox>
                    <Paragraph size="medium">{calcLevel(xp)}</Paragraph>
                    <Image
                      src="/images/level.png"
                      alt="level-count"
                      width={22}
                      height={22}
                    />
                  </StyledBox>
                )}
              </StyledRow>
            );
          })}
    </Fragment>
  );
};
