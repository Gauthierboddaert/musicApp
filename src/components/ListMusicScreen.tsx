import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, FlatList } from "react-native";

export const ListMusicScreen = ({}) => {
  return <SafeAreaView style={styles.safeContainer}></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
