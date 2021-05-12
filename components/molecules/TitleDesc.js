import React, { useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";

export default TitleDesc = ({ data }) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: data.title.image.url,
        }}
      />
      <Text>{data.title.title}</Text>
      <Text>{data.title.seriesStartYear} - {data.title.seriesEndYear}</Text>
      <Text>Episodes: {data.title.numberOfEpisodes}</Text>
      <Text>Type: {data.title.titleType}</Text>

      <Text>Rating: {data.ratings.rating} ({data.ratings.ratingCount} votes)</Text>

      <Text>Summary</Text>
      <Text>{data.plotSummary.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 25,
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
    width: 1454 / 8,
    height: 2048 / 8,
  },
});
