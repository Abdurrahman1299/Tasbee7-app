import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Mesbaha = () => {
  const [counts, setCounts] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.counts}>{counts}</Text>
      <View>
        <Pressable onPress={() => setCounts(counts + 1)}>
          <Text style={styles.button}>Count</Text>
        </Pressable>
        <Pressable onPress={() => setCounts(0)}>
          <Text style={styles.button}>Reset</Text>
        </Pressable>
      </View>
    </View>
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
  counts: {
    fontSize: 32,
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
