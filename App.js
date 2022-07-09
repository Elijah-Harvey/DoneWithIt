import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          // fontFamily: "Roboto",
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "600",
          color: "tomato",
          textTransform: "capitalize",
          textAlign: "center",
          lineHeight: 30,
        }}
      >
        blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
      </Text>
    </View>
  );
}
