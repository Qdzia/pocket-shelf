import React, { useState } from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";
import * as firebase from "firebase";
import PasswordInput from "../components/atoms/PasswordInput";

export default function AuthRegister({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Register Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
  },
  error: {
    color: "red",
  },
  button: {
    width: "100%",
  },
});
