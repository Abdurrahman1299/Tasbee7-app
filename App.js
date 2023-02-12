import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Mesbaha from "./Screens/Mesbaha";
import DailyPrayer from "./Screens/DailyPrayer";
import MonthlyPrayer from "./Screens/MonthlyPrayer";

// react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { blueColor, lightGrey } from "./assets/constants";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="auto" />
      <Tab.Navigator
        initialRouteName="سبِّح"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "سبِّح") {
              iconName = focused
                ? "md-checkmark-circle"
                : "md-checkmark-circle-outline";
            } else if (route.name === "صلاتك اليوم") {
              iconName = focused ? "ios-calendar" : "ios-calendar-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={32} color={color} />;
          },

          tabBarActiveTintColor: blueColor,
          tabBarInactiveTintColor: lightGrey,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: blueColor },
          headerTitleStyle: { fontSize: 30 },
          tabBarStyle: {
            position: "absolute",
            bottom: 44,
            marginHorizontal: 35,
            elevation: 3,
            borderRadius: 20,
            height: 62,
          },
          tabBarIconStyle: { marginTop: 4 },
          tabBarLabelStyle: { fontSize: 14, paddingBottom: 4 },
        })}
      >
        <Tab.Screen name="سبِّح" component={Mesbaha} />
        {/* <Tab.Screen name="صلاتك اليوم" component={DailyPrayer} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
