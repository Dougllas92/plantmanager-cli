import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px 30px;
  background-color: ${theme.colors.background};
`;

export const Spot = styled.View`
  background-color: ${theme.colors.blue_light};
  padding: 0px 20px;
  border-radius: 20px;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SpotImage = styled.Image`
  height: 56px;
  width: 56px;
`;

export const SpotText = styled.Text`
  flex: 1;
  color: ${theme.colors.blue};
  padding: 0px 20px;
  text-align: justify;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  font-size: ${theme.sizes.subtitle};
  font-family: ${theme.family.heading};
  color: ${theme.colors.heading};
`;

export const PlantsFlat = styled.FlatList`
  flex: 1;
`;