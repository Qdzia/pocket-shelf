import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Loading({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Loading Screen</Text>
      <Button
        title="Go to Inside"
        onPress={() => navigation.navigate("Hub")}
      />
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
