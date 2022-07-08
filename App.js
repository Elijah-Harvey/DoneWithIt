import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Alert, Button } from "react-native";

export default function App() {
  return (
    <View style={[ styles.container, containerStyle ]}>
      <Button  title="Click me" onPress={() => console.log("Press me")} />
    </View>
  );
}

const containerStyle = { flex:1 , backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#709",
    justifyContent: "center",
    alignItems: "center",
  },
});
