import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { blueColor } from "../assets/constants";

export const months = [
  "يناير",
  "فبراير",
  "مارس",
  "إبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];

const days = [
  "اﻷحد",
  "اﻷثنين",
  "الثلاثاء",
  "اﻷربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];

const prayers = ["الفجر", "الظهر", "العصر", "المغرب", "العشاء"];

const Salat = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dateText}>
          {`${days[new Date().getDay()]} - ${new Date().getDate()},${
            months[new Date().getMonth()]
          } - ${new Date().getFullYear()}`}
        </Text>
      </View>
      <View>
        <View style={styles.prayersContainer}>
          <View style={{ flexDirection: "row" }}>
            <BouncyCheckbox
              size={30}
              fillColor={blueColor}
              innerIconStyle={{ borderWidth: 3 }}
            />
          </View>
          <Text style={styles.salatText}>الفجر</Text>
        </View>
        <View style={styles.prayersContainer}>
          <View style={{ flexDirection: "row" }}>
            <BouncyCheckbox
              size={30}
              fillColor={blueColor}
              innerIconStyle={{ borderWidth: 3 }}
            />
          </View>
          <Text style={styles.salatText}>الظهر</Text>
        </View>
        <View style={styles.prayersContainer}>
          <View style={{ flexDirection: "row" }}>
            <BouncyCheckbox
              size={30}
              fillColor={blueColor}
              innerIconStyle={{ borderWidth: 3 }}
            />
          </View>
          <Text style={styles.salatText}>العصر</Text>
        </View>
        <View style={styles.prayersContainer}>
          <View style={{ flexDirection: "row" }}>
            <BouncyCheckbox
              size={30}
              fillColor={blueColor}
              innerIconStyle={{ borderWidth: 3 }}
            />
          </View>
          <Text style={styles.salatText}>المغرب</Text>
        </View>
        <View style={styles.prayersContainer}>
          <View style={{ flexDirection: "row" }}>
            <BouncyCheckbox
              size={30}
              fillColor={blueColor}
              innerIconStyle={{ borderWidth: 3 }}
            />
          </View>
          <Text style={styles.salatText}>العشاء</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => {
          console.log("hi");
        }}
      >
        <Text style={styles.buttonText}>الصلوات الفائتة</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Salat;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  dateText: {
    fontSize: 32,
  },
  prayersContainer: {
    marginVertical: 8,
    flexDirection: "row",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: blueColor,
    paddingHorizontal: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  salatText: {
    fontSize: 32,
  },
  button: {
    backgroundColor: blueColor,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});
