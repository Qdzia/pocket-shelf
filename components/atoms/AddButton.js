import React, {useState} from "react";
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
import { MaterialIcons } from '@expo/vector-icons';

export default AddButton = ({ data, inList, update }) => {

  const [canAdd, setCanAdd] = useState(!inList)

  const addToList = () => {
    var user = firebase.auth().currentUser;

    if(canAdd){
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
      }).then(setCanAdd(false)).then(update());
    } else {
      firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("titles")
      .doc(data.id)
      .delete()
      .then(setCanAdd(true))
      .then(update())
    }
    
  };

  return (
    <TouchableOpacity style={styles.container} onPress={addToList}>
      {canAdd ? 
        <MaterialIcons name="playlist-add" size={24} color="black" />
      :
      <MaterialIcons name="playlist-add-check" size={24} color="black" />
      
    }
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    //width: "100%",
    //flexDirection: "row",
  },
  icon: {
    //alignSelf: "center",
    //width: "100%",
  },
});
