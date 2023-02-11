import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Mesbaha from "./Screens/Mesbaha";
import DailyPrayer from "./Screens/DailyPrayer";
import MonthlyPrayer from "./Screens/MonthlyPrayer";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Mesbaha /> */}
      {/* <DailyPrayer /> */}
      <MonthlyPrayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
