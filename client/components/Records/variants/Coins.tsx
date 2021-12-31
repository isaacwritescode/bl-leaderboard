import Image from "next/image";
import { Paragraph } from "../../Paragraph";
import { AvatarGenerator } from "random-avatar-generator";
import { useAllCoinsQuery } from "../../../generated/graphql";
import { Dispatch, Fragment, SetStateAction, useEffect } from "react";
import { StyledBox, StyledRow } from "../style";
import { textShortner } from "../../../utils/textShortner";

interface Props {
  isLoading: Dispatch<SetStateAction<boolean>>;
}


export const Coins = ({ isLoading }: Props) => {
  const generator = new AvatarGenerator();
  const [{ data, fetching }] = useAllCoinsQuery();

  useEffect(() => {
    if (fetching) {
      isLoading(true);
    } else if (!data?.allCoins) {
    } else {
      setTimeout(() => {
        isLoading(false);
      }, 1000);
    }
  }, [fetching, isLoading, data?.allCoins]);

  return (
    <Fragment>
      <StyledRow>
        <Paragraph size="medium">#</Paragraph>
        <Paragraph size="medium">username</Paragraph>
        <Paragraph size="medium">coins</Paragraph>
      </StyledRow>
      {!data?.allCoins
        ? null
        : data.allCoins.map(({ user_ID, points }, idx) => {
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
                <StyledBox>
                  <Paragraph size="medium">
                    {points.toLocaleString("en-IN")}
                  </Paragraph>
                  <Image
                    src="/images/coins.svg"
                    alt="coin-count"
                    width={24}
                    height={24}
                  />
                </StyledBox>
              </StyledRow>
            );
          })}
    </Fragment>
  );
};
