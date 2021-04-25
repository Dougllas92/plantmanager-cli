import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${theme.colors.shape};
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding: 50px 30px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.shape};
`;

export const PlantName = styled.Text`
  font-size: ${theme.sizes.subtitle};
  font-family: ${theme.family.heading};
  color: ${theme.colors.heading};
`;

export const PlantAbout = styled.Text`
  text-align: center;
  font-size: ${theme.sizes.medium};
  font-family: ${theme.family.text};
  color: ${theme.colors.heading};
`;

export const Controller = styled.View`
  background-color: ${theme.colors.white};
  padding: 0px 20px;
`;

export const CardTipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 50px;
`;

export const CardTipImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const CardTipText = styled.Text`
  flex: 1;
  font-family: ${theme.family.text};
  font-size: ${theme.sizes.medium};
  text-align: justify;
  color: ${theme.colors.blue};
`;

export const AlertLabel = styled.Text`
  text-align: center;
  font-family: ${theme.family.text};
  font-size: ${theme.sizes.caption};
`;

export const DateTimePickerButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 0px 40px;
`;

export const DateTimePickerText = styled.Text`
  color: ${theme.colors.heading};
  font-size: ${theme.sizes.subtitle};
  font-family: ${theme.family.text};

`;