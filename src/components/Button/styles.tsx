import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Btn = styled.TouchableOpacity`
  background-color: ${theme.colors.green};
  width: 56px;
  height: 56px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  font-size: ${theme.sizes.subtitle};
  color: ${theme.colors.white};
`;