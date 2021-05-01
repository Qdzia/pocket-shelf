import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default ItemBase = ({ title, year, type, url, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Image
          style={styles.img}
          source={{
            uri: url,
          }}
        />
      </View>
      <View style={styles.info}>
      
        <Text style={styles.title}>{title}</Text>
        <Text>{year}</Text>
        <Text>{type}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  img: {
    width: 1454 / 15,
    height: 2048 / 15,
  },
  info: {
    padding: 10,
    width: "80%"
  },
  title: {
    flexShrink: 1,
    fontSize: 22
  }
});
