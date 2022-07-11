import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import authStorage from "../auth/storage";
import Icon from "../components/Icon";

import ListItem from "../components/lists/ListItem";
import ListItemSeparatorComponent from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import AuthContext from './../auth/context';

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES
  },
];

function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext)

  const handleLogOut =() => {
    setUser(null);
    authStorage.removeToken()
  }

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem title="Logout" IconComponent={<Icon name="logout" backgroundColor="#ffe66d"/>}
      onPress={handleLogOut}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
