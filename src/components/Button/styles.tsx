import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Btn = styled.TouchableOpacity`
  background-color: ${theme.colors.green};
  height: 56px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: ${theme.sizes.medium};
  color: ${theme.colors.white};
`;