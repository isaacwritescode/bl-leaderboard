import Lottie from "react-lottie";
import { Paragraph } from "../Paragraph";
import { StyledScrollIndicatorBlock } from "./style";
import defaultLottieOptions from "../../lottie/defaultOptions";
import animationDataMouseScroll from "../../lottie/mouse-scroll-animation.json";


export const ScrollIndicator = () => {
  return (
    <StyledScrollIndicatorBlock>
      <Lottie
        options={{
          animationData: animationDataMouseScroll,
          ...defaultLottieOptions,
        }}
        height={32}
        width={32}
      />
      <Paragraph size="small" color="primary">
        Scroll
      </Paragraph>
    </StyledScrollIndicatorBlock>
  );
};
