import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./Route";
import HomePage from "../components/HomePage";
import { ListMusicScreen } from "../components/ListMusicScreen";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={Routes.HOME_SCREEN} component={HomePage} />
        <Stack.Screen name={Routes.LIST_MUSIC} component={ListMusicScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
