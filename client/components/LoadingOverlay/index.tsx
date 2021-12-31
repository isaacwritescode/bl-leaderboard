import Lottie from "react-lottie";
import { StyledOverlay, StyledWrapper } from "./style";
import animationDataLoading from "../../lottie/loading.json";
import defaultLottieOptions from "../../lottie/defaultOptions";
import { Heading } from "../Heading";


export const LoadingOverlay = () => {
  return (
    <StyledOverlay>
      <StyledWrapper>
        <Lottie
          options={{
            animationData: animationDataLoading,
            ...defaultLottieOptions,
          }}
          height={120}
          width={120}
        />
        <Heading size="small">Loading...</Heading>
      </StyledWrapper>
    </StyledOverlay>
  );
};
