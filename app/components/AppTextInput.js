import React from 'react';
import { Platform, StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from "../config/colors";




function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.meduim} style={styles.icon}/>}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    margin: 10
  },
  textInput: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
})

export default AppTextInput;