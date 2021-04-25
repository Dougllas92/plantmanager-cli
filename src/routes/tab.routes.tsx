import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from '../styles/theme';
import { PlantsSelect } from '../screens/PlantsSelect';
import { MyPlants } from '../screens/MyPlants';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.green,
        inactiveTintColor: theme.colors.heading,
        labelPosition: 'beside-icon',
        style: {
          height: 60,
        }
      }}
    >
      <AppTab.Screen
        name="Nova Planta"
        component={PlantsSelect}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color} />
          ))
        }}
      />

      <AppTab.Screen
        name="Minhas Plantas"
        component={MyPlants}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color} />
          ))
        }}
      />

    </AppTab.Navigator>
  )
}

export default AuthRoutes;