import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { blueColor, darkGrey, lightGrey } from "../assets/constants";
import { SelectList } from "react-native-dropdown-select-list";

const Mesbaha = () => {
  const [counts, setCounts] = useState(0);
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "سبحان الله" },
    { key: "2", value: "الحمد لله" },
    { key: "3", value: "لا إله إلا الله" },
    { key: "4", value: "الله أكبر" },
    { key: "5", value: "لا حول ولا قوة إلا بالله" },
    { key: "6", value: "أستغفر الله" },
    { key: "7", value: "سبحان الله وبحمده سبحان الله العظيم" },
  ];

  return (
    <View style={styles.container}>
      <View>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
          search={false}
          defaultOption={{ key: "1", value: "سبحان الله" }}
          boxStyles={{
            width: 240,
            justifyContent: "space-between",
            alignItems: "center",
          }}
          inputStyles={{ fontSize: 20, fontWeight: "bold" }}
          dropdownTextStyles={{ fontSize: 16 }}
          maxHeight={140}
        />
      </View>
      <View style={styles.counts}>
        <Text style={styles.text}>{counts}</Text>
      </View>
      <View style={styles.buttons}>
        <Pressable onPress={() => setCounts(0)}>
          <Text style={styles.button}>إعادة</Text>
        </Pressable>
        <Pressable onPress={() => setCounts(counts + 1)}>
          <Text style={styles.button}>سبّح</Text>
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 240,
    width: 240,
    borderRadius: 120,
    backgroundColor: blueColor,
  },
  text: {
    fontSize: 44,
    color: darkGrey,
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 8,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 8,
    borderWidth: 1.25,
    color: darkGrey,
    fontSize: 28,
  },
});
