import React, { useState} from "react";
import { Text, TextInput, View } from "react-native";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListItem from "./app/components/ListItem";
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from './app/components/AppTextInput';

export default function App() {
  const [firstName, setFirstName] =useState('')

  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email"/>
    </Screen>
  );
}
