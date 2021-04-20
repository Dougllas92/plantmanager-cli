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
  margin-top: 60px;
`;

export const Image = styled.Image``;

export const Subtitle = styled.Text`
  font-size: ${theme.sizes.medium};
  padding: 0px 20px;
  text-align: center;
  margin-bottom: 50px;
  line-height: 25px;
`;