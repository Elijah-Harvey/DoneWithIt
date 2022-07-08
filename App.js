import React from "react";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
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
  const {landscape} = useDeviceOrientation();

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#111",
          width: "100%",
          height: landscape ? '100%' : "30%"
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
