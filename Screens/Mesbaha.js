import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

const Mesbaha = () => {
  const [counts, setCounts] = useState(99);

  const countComponent = () => {
    if (counts == 100) {
      return <Text style={styles.oneHundred}>{counts}</Text>;
    } else if (counts == 200) {
      return <Text style={styles.twoHundred}>{counts}</Text>;
    } else {
      return <Text style={styles.ordinary}>{counts}</Text>;
    }
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../img/background.jpg")}
      resizeMode="cover"
      opacity={0.72}
    >
      <View style={styles.container}>
        {countComponent()}
        <View>
          <Pressable onPress={() => setCounts(counts + 1)}>
            <Text style={styles.button}>Count</Text>
          </Pressable>
          <Pressable onPress={() => setCounts(counts - 1)}>
            <Text style={styles.button}>minus</Text>
          </Pressable>
          <Pressable onPress={() => setCounts(0)}>
            <Text style={styles.button}>Reset</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Mesbaha;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  background: {
    flex: 1,
  },
  ordinary: {
    fontSize: 32,
    color: "gold",
  },
  oneHundred: {
    fontSize: 32,
    color: "silver",
  },
  twoHundred: {
    fontSize: 32,
    color: "tomato",
    fontWeight: "bold",
  },
  button: {
    marginTop: 18,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
});
