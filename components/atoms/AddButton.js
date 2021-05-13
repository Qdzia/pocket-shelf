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

export default AddButton = ({ data }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Entypo style={styles.icon} name="add-to-list" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
      width: '100%',
      flexDirection: "row",
  },
  icon: {
    alignSelf: "center",
    width: "100%"
  }
});
