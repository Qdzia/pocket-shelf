import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import TitlePanel from '../components/organisms/TitlePanel'

export default function Title({ route }) {
    const { titleId } = route.params;
  return (
    <View style={styles.container}>
      <TitlePanel titleId={titleId}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
