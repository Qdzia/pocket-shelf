import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import { MaterialIcons } from "@expo/vector-icons";
import { TEXT } from "../../styles/Colors";

export default AddButton = ({ data, inList, update }) => {
  const [canAdd, setCanAdd] = useState(!inList);

  const addToList = () => {
    var user = firebase.auth().currentUser;

    if (canAdd) {
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
        })
        .then(setCanAdd(false))
        .then(update());
    } else {
      firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .collection("titles")
        .doc(data.id)
        .delete()
        .then(setCanAdd(true))
        .then(update());
    }
  };

  return (
    <TouchableOpacity
      onPress={addToList}
      activeOpacity={0.5}
    >
      {canAdd ? (
        <MaterialIcons name="playlist-add" size={24} color={TEXT} />
      ) : (
        <MaterialIcons name="playlist-add-check" size={24} color={TEXT} />
      )}
    </TouchableOpacity>
  );
};

