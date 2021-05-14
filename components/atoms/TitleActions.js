import React, {useState,useEffect } from "react";
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

export default TitleActions = ({ id }) => {
  const [inList, setInList] = useState(false);
  const [isSeen, setIsSeen] = useState(false);

  useEffect(() => { CheckState() }, [])

  const CheckState = () => {
    var user = firebase.auth().currentUser;

    firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("titles")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setInList(true);
          setIsSeen(doc.data().seen);
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  return (
    <View>
        {inList ? <Text>In List and Seen: {isSeen ? "true":"false"}</Text> : <Text>No In List</Text>}
    </View>
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
