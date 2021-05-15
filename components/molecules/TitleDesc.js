import React, { useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import TitleActions from '../atoms/TitleActions'

export default TitleDesc = ({ data }) => {

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: data.url,
        }}
      />
      <Text>{data.title}</Text>
      <Text>{data.year}</Text>
      <Text>Type: {data.type}</Text>

      <Text>Rating: {data.rating} ({data.votes} votes)</Text>
      <TitleActions data={data}/>
      <Text>Summary</Text>
      <Text>{data.plot}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
  },
  img: {
    marginVertical: 25,
    width:  Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7 * 1.43,
  },
});
