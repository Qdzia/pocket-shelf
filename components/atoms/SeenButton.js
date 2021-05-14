import React, { useState } from "react";
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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as firebase from "firebase";

export default SeenButton = ({ data }) => {
  const [isCheck, setIsCheck] = useState(data.seen);

  const seenBnt = () => {
    var user = firebase.auth().currentUser;

    firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("titles")
      .doc(data.id)
      .update({ seen: !isCheck })
      .then(() => setIsCheck(!isCheck));
  };

  return (
    <TouchableOpacity style={styles.container} onPress={seenBnt}>
      {isCheck ? (
        <MaterialCommunityIcons
          style={styles.icon}
          name="checkbox-blank-circle"
          size={24}
          color="black"
        />
      ) : (
        <MaterialCommunityIcons
          style={styles.icon}
          name="checkbox-blank-circle-outline"
          size={24}
          color="black"
        />
      )}
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
