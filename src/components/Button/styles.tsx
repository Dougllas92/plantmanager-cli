import styled from 'styled-components/native';
import theme from '../../styles/theme';

interface ButtonProps {
  disabled: boolean;
}

export const Btn = styled.TouchableOpacity<ButtonProps>`
  background-color: ${props => props.disabled ? theme.colors.green_disable : theme.colors.green};
  height: 56px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: ${theme.sizes.medium};
  color: ${theme.colors.white};
`;