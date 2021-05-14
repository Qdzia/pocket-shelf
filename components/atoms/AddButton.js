import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import * as firebase from "firebase";
import { add } from "react-native-reanimated";

export default AddButton = ({ data }) => {

  const addToList = () => {
    var user = firebase.auth().currentUser;

    firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("titles")
      .doc(data.id)
      .set({
        id: data.id,
        title: data.title,
        year: data.year,
        type: data.type,
        url: data.url,
        seen: false,
      });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={addToList}>
      <Entypo style={styles.icon} name="add-to-list" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
  icon: {
    alignSelf: "center",
    width: "100%",
  },
});
