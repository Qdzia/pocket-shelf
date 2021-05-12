import React, { useState } from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";

export default function PasswordInput({ onChangeText, value }) {
  const [dots, setDots] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder="Password..."
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
  },
});
