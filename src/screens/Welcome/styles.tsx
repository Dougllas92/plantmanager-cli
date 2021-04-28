import styled from 'styled-components/native';

import theme from '../../styles/theme';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: #FFF;
`;

export const Title = styled.Text`
  font-size: ${theme.sizes.title};
  font-weight: bold;
  text-align: center;
  color: ${theme.colors.heading};
  line-height: 38px;
`;

export const Image = styled.Image``;

export const Subtitle = styled.Text`
  font-size: ${theme.sizes.medium};
  color: ${theme.colors.body};
  font-family: ${theme.family.text};
  padding: 0px 20px;
  text-align: center;
  line-height: 25px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.green};
  width: 56px;
  height: 56px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;