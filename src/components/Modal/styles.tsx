import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

interface GradientProps {
  colors: [string, string];
}

interface ButtonTextProps {
  color: string;
}

export const Wrapper = styled.Modal`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0,0,0,0.5);
  align-items: center;
  justify-content: center;
`;

export const CardAlert = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

export const Plant = styled.View`
  width: 120px;
  height: 120px;
  background-color: ${theme.colors.shape};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const CardText = styled.Text`
  font-size: ${theme.sizes.medium};
  font-family: ${theme.family.text};
  color: ${theme.colors.heading};
  line-height: 25px;
`;

export const CardTextPlant = styled.Text`
    font-size: ${theme.sizes.medium};
    font-family: ${theme.family.heading};
    color: ${theme.colors.heading};
    line-height: 25px;
`;

export const CardOption = styled.View`
  flex-direction: row;
`;

export const ButtonOption = styled.TouchableOpacity`
    height: 48px;
    width: 96px;
`;

export const ButtonGradient = styled(LinearGradient)
  .attrs<GradientProps>(props => ({
    start: { x: 0.0, y: 0.25 },
    end: { x: 0.5, y: 1.0 },
    location: [0, 0.5, 0.6],
    colors: props.colors
  }))`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;

export const ButtonOptionText = styled.Text<ButtonTextProps>`
  font-size: ${theme.sizes.body};
  font-family: ${theme.family.text};
  color: ${props => props.color}
`;