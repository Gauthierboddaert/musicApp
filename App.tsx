import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AudioPLayer from "./src/components/AudioPlayer";

export default function App() {
  return (
    <View style={styles.container}>
      <AudioPLayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
