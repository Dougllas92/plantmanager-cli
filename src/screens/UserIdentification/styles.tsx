import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  background-color: #FFF;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  padding: 0px 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Text`
  font-size: 36px;
`;

export const Title = styled.Text`
  font-size: ${theme.sizes.subtitle};
  line-height: 32px;
  color: ${theme.colors.heading};
  text-align: center;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  color: ${theme.colors.heading};
  text-align: center;
  padding: 12px;
  width: 100%;
  font-size: ${theme.sizes.medium};
`;

export const Footer = styled.View`
  padding: 0px 20px;
  width: 100%;
`;