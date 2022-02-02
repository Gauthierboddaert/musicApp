import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import { Audio } from "expo-av";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "../assets/logo.jpeg",
        }}
      />
      <Button style={styles.btn} mode="contained" onPress={() => alert}>
        Start
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  img: {
    width: 300,
    height: 300,
    borderWidth: 1,
    borderColor: "black",
  },
  btn: {
    backgroundColor: "black",
    padding: 5,
    marginTop: 10,
    borderRadius: 10,
  },
});
