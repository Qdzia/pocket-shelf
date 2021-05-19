import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView
} from "react-native";
import * as firebase from "firebase";
import { PRIMARY, SECONDARY, TEXT, ACCENT } from "../styles/Colors";

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
        userDoc
          .collection("titles")
          .doc("init")
          .set({ id: 0 })
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
      <Text style={styles.title}>Create</Text>
      <Text style={styles.title}>Your</Text>
      <Text style={styles.title}>Shelf</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email..."
          placeholderTextColor="#C3C4C7"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password..."
          placeholderTextColor="#C3C4C7"
          secureTextEntry={true}
        />
        <Text style={styles.error}>{errorMassage}</Text>
      </View>
      <View style={styles.btn}>
      <Button
          style={styles.button}
          color={PRIMARY}
          title="Create Account"
          onPress={register}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SECONDARY,
    alignItems: "center",
    padding: 50,
  },
  input: {
    height: 40,
    width: Dimensions.get("window").width * 0.8,
    borderWidth: 2,
    borderRadius: 20,
    paddingLeft: 20,
    marginVertical: 5,
    fontSize: 16,
    borderColor: PRIMARY,
    color: TEXT,
  },
  error: {
    color: "red",
  },
  title: {
    fontSize: 70,
    color: ACCENT,
    fontWeight: "bold",
  },
  form: {
    marginTop: '20%',
    marginBottom: '20%'
  },
  btn: {
    width: Dimensions.get("window").width * 0.8
  }
});
