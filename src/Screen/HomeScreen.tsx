import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import { Audio } from "expo-av";
import { Routes } from "../navigation/route";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  console.log(navigation);
  function HandleGo() {
    navigation.navigate(Routes.LIST_MUSIC_SCREEN);
  }
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/logo.jpeg")} />

      <Button style={styles.btn} mode="contained" onPress={() => HandleGo()}>
        Start
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 300,
    height: 300,
  },
  btn: {
    backgroundColor: "black",
    padding: 5,
    marginTop: 10,
    borderRadius: 10,
  },
});
