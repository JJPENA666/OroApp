import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import CatalogoScreen from '../screens/CatalogoScreen';
import OfertaScreen from '../screens/OfertaScreen';
import CartScreen from '../screens/CartScreen';
import CreateProductScreen from "../screens/CreateProductScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Catalogo" component={CatalogoScreen} />
        <Stack.Screen name="Oferta" component={OfertaScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Product" component={CreateProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
