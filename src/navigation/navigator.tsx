import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./route";
import HomeScreen from "../Screen/HomeScreen";
import { ListMusicScreen } from "../Screen/ListMusicScreen";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen
          name={Routes.LIST_MUSIC_SCREEN}
          component={ListMusicScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
