import React, { useEffect, useState } from 'react';
import {
  Wrapper,
  HeaderPlants,
  Title,
  SubTitle,
  Environment,
  FlatEnvironment,
  Plants,
  FlatPlants,
  LoadActive
} from './styles';

import { Header } from '../../components/Header';
import { SizedBox } from '../../components/SizedBox';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import { Load } from '../../components/Load';


import api from '../../services/api';
import theme from '../../styles/theme';
import { useNavigation } from '@react-navigation/core';



interface EnvironmentProps {
  key: string;
  title: string;
}

interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  }
}

export function PlantsSelect() {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [environmentsSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true);

  //State para trabalhar com a paginação
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();


  async function fetchEnvironment() {
    const data = await api.fetchEnvironment();
    setEnvironments([
      {
        key: 'all',
        title: 'Todos',
      },
      ...data
    ]);
  }

  async function fetchPlants() {
    const data = await api.fetchPlants(page);

    if (!data)
      return setLoading(true);

    if (page > 1) {
      setPlants(oldValue => [...oldValue, ...data])
      setFilteredPlants(oldValue => [...oldValue, ...data])
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }
    setLoading(false);
    setLoadingMore(false);
  }

  function handleFetchMore(distance: number) {
    if (distance < 1)
      return;

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchPlants();
  }

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);

    //Verifica se o ambiente seleciona é o todos se for cancela o filtro
    // e retorna os dados que ja tinham vindo da API
    if (environment === 'all')
      return setFilteredPlants(plants);

    const filtered = plants.filter(plant =>
      plant.environments.includes(environment)
    );

    setFilteredPlants(filtered);
  }

  function navigateToPlantSave(plant: PlantProps) {
    navigation.navigate('PlantSave', { plant });
  }

  useEffect(() => {
    fetchEnvironment();
  }, []);

  useEffect(() => {
    fetchPlants();
  }, []);

  if (loading)
    return <Load />

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

      <Environment>
        <FlatEnvironment
          data={environments}
          //@ts-ignore
          keyExtractor={(item) => String(item.key)}
          //@ts-ignore
          renderItem={({ item }: { item: EnvironmentProps }) => (
            <EnvironmentButton
              title={item.title}
              active={item.key === environmentsSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginLeft: 32, paddingRight: 32 }}
        />
      </Environment>

      <SizedBox height={40} />
      <Plants>
        <FlatPlants
          data={filteredPlants}
          //@ts-ignore
          keyExtractor={(item) => String(item.id)}
          // @ts-ignore
          renderItem={({ item }: { item: PlantProps }) => (
            <PlantCardPrimary
              data={item}
              onPress={() => navigateToPlantSave(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore ? <LoadActive color={theme.colors.green} /> : <></>
          }
        />
      </Plants>

    </Wrapper>
  )
}