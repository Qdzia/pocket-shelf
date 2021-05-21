import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import TitleList from "../components/organisms/TitleList";
import * as firebase from "firebase";
import { SECONDARY, ACCENT } from '../styles/Colors'

export default function MyList({ navigation }) {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [isEmpty, setIsEmpty] = useState(true);

  const getData = () => {
    var user = firebase.auth().currentUser;
    firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("titles")
      .get()
      .then((docRef) => {
        let arr = docRef.docs.map((doc) => doc.data());
        arr.shift();
        setData(arr);
        if (arr.length > 0) setIsEmpty(false)
      })
      .then(setLoading(false))
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      setLoading(true);
      getData();
    });

  }, [navigation]);

  const toTitle = (id) => {
    navigation.navigate("Title", { titleId: id })
  }
  console.log(data)
  const listOfTitles = isEmpty ? <Text style={styles.subtitle}>Empty List</Text> : <TitleList data={data} mode='mylist' toTitle={toTitle} />
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : listOfTitles}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: SECONDARY,
  },
  subtitle: {
    color: ACCENT,
    fontSize: 20,
  }
});
