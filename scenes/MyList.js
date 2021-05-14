import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MyListPanel from '../components/organisms/MyListPanel'

export default function MyList({navigation}) {

  const toTitle = (id) => {
    navigation.navigate("Title", { titleId: id })
  } 

  return (
    <View style={styles.container}>
      <MyListPanel onPress={toTitle}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
