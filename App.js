import React from "react";
import {
  StyleSheet,
  View,
  Alert,
  Button,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Click me" onPress={() => console.log("Press me")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#709",
    paddingTop:
      Platform.OS === "android" ? StatusBar.currentHeight : "",
  },
});
