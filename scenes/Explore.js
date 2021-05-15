import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ActivityIndicator,TextInput } from "react-native";
import { ApiFetch } from "../utils/ApiFetch";
import TitleList from "../components/organisms/TitleList";

export default function Explore({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [text, onChangeText] = useState("");

  const getData = () => {
    var url = `https://imdb8.p.rapidapi.com/title/find?q=${text}`;
    ApiFetch(url).then((json) => {
      setData(
        json.results
          .filter((item) => {
            if (item.id.split("/")[1] === "title") {
              return true;
            }
            return false;
          })
          .map((item) => {
            let imgUrl = item.image === undefined ? 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png' : item.image.url
            return {
              id: item.id.split("/")[2],
              title: item.title,
              year: item.year,
              type: item.titleType,
              url: imgUrl,
            };
          })
      );
      setLoading(false);
    });
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  const toTitle = (id) => {
    navigation.navigate("Title", { titleId: id });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="I'm looking for..."
        onSubmitEditing={getData}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TitleList data={data} mode="explore" toTitle={toTitle} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: "15%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    width: '90%'
  }
});
