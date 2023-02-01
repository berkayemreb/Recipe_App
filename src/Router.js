import React from 'react';
import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories_Screen from './pages/Categories';
import Meals_Screen from './pages/Meals';
import Detail_Screen from './pages/Detail';

const Stack = createNativeStackNavigator();

const Router = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories_Screen}
          options={
            {
              headerTintColor: '#ffa000',
              headerTitleAlign: 'center'
            }

          }
        />
        <Stack.Screen
          name="Meals"
          component={Meals_Screen}
          options={
            {
              headerTintColor: '#ffa000',
              headerTitleAlign: 'center'
            }

          }
        />
        <Stack.Screen
          name="Detail"
          component={Detail_Screen}
          options={
            {
              headerTintColor: '#ffa000',
              headerTitleAlign: 'center'
            }

          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;

