import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import * as firebase from "firebase";

export default ItemBase = ({ id, title, year, type, url, onPress }) => {
  const addToList = () => {
    var user = firebase.auth().currentUser;
    firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("titles")
      .doc(id)
      .set({
        id: id,
        title: title,
        year: year,
        type: type,
        url: url,
        seen: false,
      });
    console.log(id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touch} onPress={onPress}>
        <Image style={styles.img} source={{ uri: url }} />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text>{year}</Text>
          <Text>{type}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionPanel}>
        <Entypo
          style={styles.icon}
          name="add-to-list"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  touch: {
    flexDirection: "row",
    width: "90%",
  },
  info: {
    width: "70%",
    paddingLeft: 10,
  },
  actionPanel: {
    width: "10%",
    flexDirection: "row",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  img: {
    width: "30%",
    height: Dimensions.get("window").width * 0.3 * 1.34,
  },
  title: {
    flexShrink: 1,
    fontSize: 20,
  },
  icon: {
    alignSelf: "center",
    width: "100%",
  },
});
