import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as firebase from "firebase";
import { TEXT } from "../../styles/Colors";

export default SeenButton = ({ id, seen }) => {
  const [isSeen, setIsSeen] = useState(seen);

  useEffect(() => {
    setIsSeen(seen)
  }, [seen])

  const seenBnt = () => {
    var user = firebase.auth().currentUser;

    firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("titles")
      .doc(id)
      .update({ seen: !isSeen })
      .then(() => setIsSeen(!isSeen));
  };

  return (
    <TouchableOpacity
      onPress={seenBnt}
      activeOpacity={0.5}
    >
      {isSeen ? (
        <MaterialCommunityIcons
          name="checkbox-blank-circle"
          size={24}
          color={TEXT}
        />
      ) : (
        <MaterialCommunityIcons
          name="checkbox-blank-circle-outline"
          size={24}
          color={TEXT}
        />
      )}
    </TouchableOpacity>
  );
};

