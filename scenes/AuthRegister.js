import React, { useState } from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";
import * as firebase from "firebase";
import PasswordInput from "../components/atoms/PasswordInput";

export default function AuthRegister({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMassage, setErrorMassage] = useState("");

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        var user = u.user;
        var userDoc = firebase.firestore().collection("users").doc(user.uid);
        userDoc.collection("titles").doc("init").set({id: 0})
          .catch((error) => {
            console.log(error);
          });
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
      <Button style={styles.button} title="Create Account" onPress={register} />
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
