import { StyleSheet, Text, View } from "react-native";
import { months } from "./DailyPrayer";
import { Calendar } from "react-native-calendars";

const MonthSalat = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>شهر / {months[new Date().getMonth()]}</Text>
      </View>
      <View>
        <Calendar />
      </View>
    </View>
  );
};

export default MonthSalat;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
});
