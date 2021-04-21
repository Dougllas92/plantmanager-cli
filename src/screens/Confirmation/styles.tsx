import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  width: 100%;
`;
export const Icon = styled.Text`
  font-size: 96px;
`;

export const Title = styled.Text`
  font-size: ${theme.sizes.subtitle};
  line-height: 32px;
  color: ${theme.colors.heading};
  text-align: center;
  font-family: ${theme.family.heading};
`;

export const SubTitle = styled.Text`
  font-size: ${theme.sizes.medium};
  line-height: 25px;
  color: ${theme.colors.body_dark};
  text-align: center;
  font-family: ${theme.family.text};
`;

export const Footer = styled.View`
  padding: 0px 100px;
  width: 100%;
`;