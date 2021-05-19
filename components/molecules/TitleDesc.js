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
import {TEXT} from '../../styles/Colors'

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
      <Text style={styles.text}>Rating: {data.rating} ({data.votes} votes)</Text>
      <Text style={styles.text}>Type: {data.type}</Text>
      <Text style={styles.text}>{data.year}</Text>
      

      <TitleActions data={data}/>
      <Text style={styles.summaryTitle}>Summary</Text>
      <View style={styles.summary}>
      <Text style={styles.summaryText}>{data.plot}</Text>
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    color: TEXT
  },
  img: {
    marginVertical: 25,
    width:  Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7 * 1.43,
  },
  title: {
    fontSize: 28,
    marginBottom: 5,
    color: TEXT
  },
  summaryTitle: {
    fontSize: 22,
    marginVertical: 10,
    color: TEXT
  },
  summary: {
    paddingHorizontal: 20,
    marginBottom: 80,
  },
  summaryText: {
    textAlign: 'justify',
    color: TEXT
  },
});
