import React, {useEffect, useState} from "react";
import { Text, View, StyleSheet,ActivityIndicator } from "react-native";
import TitleList from "../components/organisms/TitleList";
import * as firebase from "firebase";

export default function MyList({navigation}) {

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
      .then((docRef) => setData(docRef.docs.map((doc) => doc.data())))
      .then(setLoading(false));
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

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TitleList data={data} mode='mylist' toTitle={toTitle}/>
      )}
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
