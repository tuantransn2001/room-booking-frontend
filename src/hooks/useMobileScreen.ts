import { useWindowSize } from './useWindowSize';

const MOBILE_SCREEN_WIDTH = 767;

export const useMobileScreen = () => {
  const { width } = useWindowSize();
  if (width <= MOBILE_SCREEN_WIDTH) {
    return true;
  }
  return false;
};
