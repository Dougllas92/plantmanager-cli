import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const CardHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardGeet = styled.View``;

export const Geetings = styled.Text`
  font-size: ${theme.sizes.title};
  font-family: ${theme.family.text};
  color: ${theme.colors.heading};
`;

export const Username = styled.Text`
  font-size: ${theme.sizes.title};
  font-family: ${theme.family.heading};
  color: ${theme.colors.heading};
  line-height: 36px;
`;

export const Image = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;