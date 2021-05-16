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
      <Text style={styles.title}>{data.title}</Text>
      <Text>Rating: {data.rating} ({data.votes} votes)</Text>
      <Text>Type: {data.type}</Text>
      <Text>{data.year}</Text>
      

      <TitleActions data={data}/>
      <Text style={styles.summaryTitle}>Summary</Text>
      <View style={styles.summary}>
      <Text style={styles.summaryText}>{data.plot}</Text>
      </View>
      
    </View>
  );
};
//style={styles.}
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
  title: {
    fontSize: 28,
    marginBottom: 5
  },
  summaryTitle: {
    fontSize: 22,
    marginVertical: 10,
  },
  summary: {
    paddingHorizontal: 20,
    marginBottom: 80,
    
  },
  summaryText: {
    textAlign: 'justify',
  }
});
