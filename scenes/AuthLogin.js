import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import * as firebase from "firebase";
import Logo from "../assets/Logo";
import {SECONDARY,ACCENT, PRIMARY, TEXT} from '../styles/Colors'

export default function AuthLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMassage, setErrorMassage] = useState("");

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password) // Change here auto login"Franek@wp.pl""Franek111111"
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
      <View>
        <View style={styles.logo}>
        <Logo size={100} />
        </View>
        
        <Text style={styles.subtitle}>Keep your movies on hand</Text>
      </View>

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
      <View>
      <View style={styles.btn}>
        <Button title="Sign In" onPress={login} color={PRIMARY} />
      </View>
      <View style={styles.btn}>
        <Button
          title="Sign Up with Email"
          onPress={() => navigation.navigate("AuthRegister")}
          color={PRIMARY}
        />
      </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SECONDARY,
    alignItems: "center",
    justifyContent: "flex-start",
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
    color: TEXT
  },
  error: {
    color: "red",
  },
  btn: {
    marginBottom: 15,
    width: Dimensions.get("window").width * 0.8,
  },
  logo:{
    alignSelf: 'center'
  },
  subtitle: {
    fontSize: 20,
    color: ACCENT,
    marginTop: 15,
    marginBottom: 15,
    fontWeight: 'bold'
  },
  form: {
    marginVertical: '20%'
  },
});
