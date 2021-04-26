import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`;

export const HeaderPlants = styled.View`
  padding: 0px 32px;
`;

export const Title = styled.Text`
  font-size: ${theme.sizes.medium};
  font-family: ${theme.family.heading};
  color: ${theme.colors.heading};
`;

export const SubTitle = styled.Text`
  font-size: ${theme.sizes.medium};
  font-family: ${theme.family.text};
  color: ${theme.colors.heading};
`;

export const Environment = styled.View`
  height: 40px;
`;

export const FlatEnvironment = styled.FlatList``;

export const Plants = styled.View`
  flex: 1;
  padding: 0px 32px;
  justify-content: center;
`;

export const FlatPlants = styled.FlatList``;

export const LoadActive = styled.ActivityIndicator``;
