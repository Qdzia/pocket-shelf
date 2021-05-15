import React, { useState, useEffect } from "react";
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
import AddButton from "./AddButton";
import SeenButton from "./SeenButton";
import { Dimensions } from 'react-native';

export default TitleActions = ({ data }) => {
  const [inList, setInList] = useState(false);
  const [isSeen, setIsSeen] = useState(false);

  useEffect(() => {
    CheckState();
  }, []);

  const update = () => setInList(!inList);

  const CheckState = () => {
    var user = firebase.auth().currentUser;

    firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("titles")
      .doc(data.id) //change tt1480055 // id.,
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

  const NewTitle = (
    <View style={styles.oneBtn}>
      <AddButton data={data} inList={inList} update={update}/>
    </View>
  );
  const ListTitle = (
    <View style={styles.flexRow}>
      <View style={styles.btn}>
        <SeenButton id={data.id} seen={isSeen}/>
      </View>
      <View style={styles.btn}>
        <AddButton data={data} inList={inList} update={update}/>
      </View>
    </View>
  );

  return <View style={styles.container}>{inList ? ListTitle : NewTitle}</View>;
};
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    padding: 8,
    marginVertical: 15
  },
  flexRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    width: (Dimensions.get('window').width - 16) /2,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    alignSelf: "center",
    width: "100%",
  },
  oneBtn: {
    width: Dimensions.get('window').width - 16,
    justifyContent: 'center',
    flexDirection: 'row',
  }
});
