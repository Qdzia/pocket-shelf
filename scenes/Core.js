import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import BottomBar from "../components/atoms/BottomBar";
import Explore from "./Explore";
import Home from "./Home";
import MyList from "./MyList";

export default function Core({ navigation }) {

  const [content, setContent] = useState("home");

  const openTitle = (str) => {
    navigation.navigate("Title", { title: str });
  };

  const tab = (param) => {
    switch (param) {
      case "home":
        return <Home openTitle={openTitle} />;
      case "mylist":
        return <MyList openTitle={openTitle} />;
      case "explore":
        return <Explore openTitle={openTitle} />;
      default:
        return "home";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>{tab(content)}</View>
      <BottomBar setContent={setContent} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
  },
});
