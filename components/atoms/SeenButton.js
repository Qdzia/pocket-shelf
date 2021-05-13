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
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as firebase from "firebase";

export default SeenButton = ({ data }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <MaterialCommunityIcons style={styles.icon} name="checkbox-blank-circle" size={24} color="black" />
    </TouchableOpacity>
  );
};
//<MaterialCommunityIcons style={styles.icon} name="checkbox-blank-circle-outline" size={24} color="black" />
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
