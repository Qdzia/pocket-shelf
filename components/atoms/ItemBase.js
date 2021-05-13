import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
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
      .set({ id: id, title: title, year: year, type: type, url: url, seen: false});
      console.log(id)
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Image
          style={styles.img}
          source={{
            uri: url,
          }}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text>{year}</Text>
        <Text>{type}</Text>
        <Entypo name="add-to-list" size={24} color="black" />
        <Button title="tak" onPress={addToList} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  img: {
    width: 1454 / 15,
    height: 2048 / 15,
  },
  info: {
    padding: 10,
    width: "80%",
  },
  title: {
    flexShrink: 1,
    fontSize: 22,
  },
});
