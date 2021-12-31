import Image from "next/image";
import { Paragraph } from "../../Paragraph";
import { AvatarGenerator } from "random-avatar-generator";
import { useAllStudyMutation } from "../../../generated/graphql";
import { Dispatch, Fragment, SetStateAction, useEffect } from "react";
import { StyledBox, StyledBoxGroupLarge, StyledRow } from "../style";
import { iconMap, sortOptions } from "../../../utils/constants";
import { textShortner } from "../../../utils/textShortner";

interface Props {
  isLoading: Dispatch<SetStateAction<boolean>>;
  currSortOption: string;
  isLargeDisplay: Boolean
}


export const Study = ({ isLoading, currSortOption, isLargeDisplay}: Props) => {
  const generator = new AvatarGenerator();
  const [{ data }, allStudy] = useAllStudyMutation();

  useEffect(() => {
    (async () => {
      isLoading(true);
      await allStudy({ sort: currSortOption });
      setTimeout(() => {
        isLoading(false);
      }, 1000);
    })();
  }, [currSortOption, allStudy, isLoading]);

  return (
    <Fragment>
      <StyledRow>
        <Paragraph size="medium">#</Paragraph>
        <Paragraph size="medium">username</Paragraph>
        {!isLargeDisplay ? (
          <Paragraph size="medium">{currSortOption}</Paragraph>
        ) : (
          <StyledBoxGroupLarge>
            {!data?.allStudy
              ? null
              : Object.keys(data?.allStudy[0]).map((elem, idx) =>
                  sortOptions.includes(elem) ? (
                    <Paragraph key={idx} size="medium">
                      {elem}
                    </Paragraph>
                  ) : null
                )}
          </StyledBoxGroupLarge>
        )}
      </StyledRow>
      {!data?.allStudy
        ? null
        : data.allStudy.map(
            (
              {
                user_ID,
                __typename,
                yesterday,
                ...rest
              }: { [index: string]: any },
              idx
            ) => {
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
                  {!isLargeDisplay ? (
                    <StyledBox>
                      <Paragraph size="medium">
                        {rest[currSortOption].toLocaleString("en-IN")}
                      </Paragraph>
                      <Image
                        src={
                          iconMap.hasOwnProperty(currSortOption)
                            ? iconMap[currSortOption]
                            : iconMap["time"]
                        }
                        alt="xp-count"
                        width={22}
                        height={22}
                      />
                    </StyledBox>
                  ) : (
                    <StyledBoxGroupLarge>
                      {Object.keys(rest).map((elem, idx) => (
                        <StyledBox key={idx}>
                          <Paragraph size="medium">
                            {rest[elem].toLocaleString("en-IN")}
                          </Paragraph>
                          <Image
                            src={
                              iconMap.hasOwnProperty(elem)
                                ? iconMap[elem]
                                : iconMap["time"]
                            }
                            alt="xp-count"
                            width={22}
                            height={22}
                          />
                        </StyledBox>
                      ))}
                    </StyledBoxGroupLarge>
                  )}
                </StyledRow>
              );
            }
          )}
    </Fragment>
  );
};
