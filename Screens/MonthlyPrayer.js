import { StyleSheet, Text, View } from "react-native";
import { months } from "./DailyPrayer";

const MonthSalat = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>شهر / {months[new Date().getMonth()]}</Text>
      </View>
      <View></View>
    </View>
  );
};

export default MonthSalat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
