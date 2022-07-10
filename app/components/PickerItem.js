import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from "./AppText/AppText";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.text} onPress={onPress}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  }
})

export default PickerItem;