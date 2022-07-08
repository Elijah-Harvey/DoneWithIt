import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Alert,
  Button,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#111",
          width: "50%",
          height: 70,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#709",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "",
  },
});
