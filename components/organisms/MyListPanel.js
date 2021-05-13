import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  TextInput,
} from "react-native";
import TitleDesc from "../molecules/TitleDesc";
import * as firebase from "firebase";

export default TitlePanel = ({ titleId }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);

  const getData = () => {
    var user = firebase.auth().currentUser;
    firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("titles")
      .get()
      .then((docRef) => setData(docRef.docs.map((doc) => doc.data())));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <View style={styles.container}>
      <Text>My List Here</Text>
      {/* {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TitleDesc data={data} />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
  },
});
