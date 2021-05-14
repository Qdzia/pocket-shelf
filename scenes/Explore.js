import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { ApiFetch } from "../utils/ApiFetch";
import TitleList from "../components/organisms/TitleList";

export default function Explore({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);

  const getData = () => {
    var url = `https://imdb8.p.rapidapi.com/title/find?q=bird`;
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
            //let imgUrl = item.image.url === undefined ? 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png' : item.image.url
            return {
              id: item.id.split("/")[2],
              title: item.title,
              year: item.year,
              type: item.titleType,
              url: item.image.url,
            };
          })
      );
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const toTitle = (id) => {
    navigation.navigate("Title", { titleId: id });
  };

  return (
    <View style={styles.container}>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
