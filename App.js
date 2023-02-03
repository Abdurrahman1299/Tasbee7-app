import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Mesbaha from "./Screens/Mesbaha";

export default function App() {
  return (
    <View style={styles.container}>
      <Mesbaha />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
