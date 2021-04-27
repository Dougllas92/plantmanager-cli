import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../styles/theme';

import Lottie from 'lottie-react-native';

export const Wrapper = styled(LinearGradient).attrs({
  colors: [`${theme.colors.green_light}`, `${theme.colors.white}`]
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Load = styled(Lottie)`
  width: 40px;
  height: 40px;
`;