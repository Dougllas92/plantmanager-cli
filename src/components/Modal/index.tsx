import React from 'react';
import { SvgFromUri } from 'react-native-svg';



import theme from '../../styles/theme';
import { SizedBox } from '../SizedBox';
import {
  Wrapper,
  Container,
  CardTextPlant,
  CardAlert,
  Plant,
  CardText,
  ButtonOption,
  ButtonGradient,
  ButtonOptionText,
  CardOption
} from './styles';

interface ModalProps {
  visible: boolean;
  data: {
    id: string;
    name: string;
    photo: string;
  };
  onRequestClose: () => void;
  handleRemovePlant: (plant: string) => Promise<void>;
}


export function Modal({ visible, onRequestClose, handleRemovePlant, data }: ModalProps) {
  return (
    <Wrapper
      animationType="slide"
      visible={visible}
      transparent={true}
    >
      <Container>
        <CardAlert>
          <Plant>
            <SvgFromUri
              uri={data.photo}
              width={110}
              height={110}

            />
          </Plant>

          <SizedBox height={16} />
          <CardText>Deseja mesmo deletar sua</CardText>
          <CardTextPlant>{data.name}?</CardTextPlant>

          <SizedBox height={24} />
          <CardOption>
            <ButtonOption onPress={() => onRequestClose()}>
              <ButtonGradient colors={['#F5FAF7', '#F0F0F0']}>
                <ButtonOptionText color={theme.colors.heading}>Cancelar</ButtonOptionText>
              </ButtonGradient>
            </ButtonOption>

            <SizedBox width={9} />

            <ButtonOption onPress={() => handleRemovePlant(data.id)}>
              <ButtonGradient colors={['#FAF5F5', '#F0F0F0']}>
                <ButtonOptionText color={theme.colors.red}>Deletar</ButtonOptionText>
              </ButtonGradient>
            </ButtonOption>

          </CardOption>
        </CardAlert>
      </Container>
    </Wrapper>
  )
}
