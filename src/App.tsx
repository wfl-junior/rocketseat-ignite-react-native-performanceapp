import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121014",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 36,
    fontWeight: "700",
  },
});

export const App: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello World</Text>
  </View>
);
