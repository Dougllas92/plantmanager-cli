import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import theme from '../styles/theme';
import { Welcome } from '../screens/Welcome/Welcome';
import { UserIdentification } from '../screens/UserIdentification';
import { Confirmation } from '../screens/Confirmation';
import { PlantsSelect } from '../screens/PlantsSelect';
import { PlantSave } from '../screens/PlantSave';

const stackRoutes = createStackNavigator();

const AppRoute: React.FC = () => (
  <stackRoutes.Navigator
    headerMode='none'
    screenOptions={{
      cardStyle: {
        backgroundColor: theme.colors.white
      },
    }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />
    <stackRoutes.Screen name="UserIdentification" component={UserIdentification} />
    <stackRoutes.Screen name="Confirmation" component={Confirmation} />
    <stackRoutes.Screen name="PlantsSelect" component={PlantsSelect} />
    <stackRoutes.Screen name="PlantSave" component={PlantSave} />
  </stackRoutes.Navigator>
)

export default AppRoute;