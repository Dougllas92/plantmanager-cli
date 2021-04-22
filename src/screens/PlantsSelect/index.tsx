import React, { useEffect, useState } from 'react';
import {
  Wrapper,
  HeaderPlants,
  Title,
  SubTitle,
  Environment,
  FlatEnvironment,
} from './styles';

import { Header } from '../../components/Header';
import { SizedBox } from '../../components/SizedBox';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import api from '../../services/api';



interface EnvironmentProps {
  key: string;
  title: string;
}

export function PlantsSelect() {

  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);

  async function fetchEnvironment() {
    const data = await api.fetchEnvironment();
    setEnvironments(data);
  }

  useEffect(() => {
    fetchEnvironment();
  }, []);

  return (
    <Wrapper>
      <HeaderPlants>
        <SizedBox height={50} />
        <Header />

        <SizedBox height={40} />
        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </HeaderPlants>

      <SizedBox height={24} />

      <FlatEnvironment
        data={environments}
        renderItem={({ key, title }: EnvironmentProps) => (
          <EnvironmentButton title={title} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginLeft: 32 }}

      />

    </Wrapper>
  )
}