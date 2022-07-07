import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, Button } from "react-native";
import { TouchableNativeFeedback } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button color="orange" title="Click me" onPress={() => console.log('Button clicked')}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
