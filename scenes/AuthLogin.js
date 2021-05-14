import React, { useState } from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";
import * as firebase from "firebase";
import PasswordInput from "../components/atoms/PasswordInput";

export default function AuthLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMassage, setErrorMassage] = useState("");

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword("Franek@wp.pl", "Franek111111")// Change here auto login
      .then(() => {
        navigation.navigate("Hub");
      })
      .catch((error) => {
        console.log(error);
        setErrorMassage(error.message);
      });
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email..."
      />
      <PasswordInput onChangeText={setPassword} value={password} />
      <Text style={styles.error}>{errorMassage}</Text>
      <Button style={styles.button} title="Sign In" onPress={login} />
      <Button
        style={styles.button}
        title="Sign Up with Email"
        onPress={() => navigation.navigate("AuthRegister")}
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
    padding: 15,
  },
});
