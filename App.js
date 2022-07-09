import React from "react";
import { View } from "react-native";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListItem from './app/components/ListItem';

export default function App() {
  return (
    <Screen>
      <ListItem title="My Title" subTitle="My subtTitle" />
    </Screen>
  );
}
