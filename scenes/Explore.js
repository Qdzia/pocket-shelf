import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ExplorePanel from '../components/organisms/ExplorePanel'

export default function Explore({ openTitle }) {
  return (
    <View style={styles.container}>
      <ExplorePanel/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
