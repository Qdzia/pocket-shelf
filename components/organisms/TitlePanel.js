import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  ActivityIndicator,
  StyleSheet,
  TextInput,
} from "react-native";
import { ApiFetch } from "../../utils/ApiFetch";
import TitleDesc from "../molecules/TitleDesc";

const call = {
  certificates: {
    US: [
      {
        certificate: "TV-14",
        country: "US",
      },
    ],
  },
  genres: ["Drama", "Fantasy", "Horror", "Mystery", "Sci-Fi", "Thriller"],
  id: "/title/tt4574334/",
  plotOutline: {
    author: "David Rush",
    id: "/title/tt4574334/plot/po2383221",
    text: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
  },
  plotSummary: {
    author: "Charles J.",
    id: "/title/tt4574334/plot/ps2810322",
    text: "In a small town where everyone knows everyone, a peculiar incident starts a chain of events that leads to the disappearance of a child, which begins to tear at the fabric of an otherwise peaceful community. Dark government agencies and seemingly malevolent supernatural forces converge on the town, while a few of the locals begin to understand that there's more going on than meets the eye.",
  },
  ratings: {
    canRate: true,
    otherRanks: [
      {
        id: "/chart/ratings/toptv",
        label: "Top 250 TV",
        rank: 88,
        rankType: "topTv",
      },
    ],
    rating: 8.7,
    ratingCount: 851624,
  },
  releaseDate: "2016-07-15",
  title: {
    "@type": "imdb.api.title.title",
    id: "/title/tt4574334/",
    image: {
      height: 2222,
      id: "/title/tt4574334/images/rm3201171968",
      url: "https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg",
      width: 1500,
    },
    nextEpisode: "/title/tt4593118/",
    numberOfEpisodes: 34,
    runningTimeInMinutes: 51,
    seriesStartYear: 2016,
    title: "Stranger Things",
    titleType: "tvSeries",
    year: 2016,
  },
};

export default TitlePanel = ({ titleId }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);

  const search = () => {
    setData({
          id: call.id.split("/")[2],
          title: call.title.title,
          year: call.title.year,
          type: call.title.titleType,
          rating: call.ratings.rating,
          votes: call.ratings.ratingCount,
          url: call.title.image.url,
          plot: call.plotSummary.text,
        });
    setLoading(false);
    // var url = `https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${titleId}&currentCountry=US`;
    // ApiFetch(url).then((json) => {
    //   setData({
    //     id: json.id.split("/")[2],
    //     title: json.title.title,
    //     year: json.title.year,
    //     type: json.title.titleType,
    //     rating: json.ratings.rating,
    //     votes: json.ratings.ratingCount,
    //     url: json.title.image.url,
    //     plot: json.plotSummary.text,
    //   });
    //   setLoading(false);
    //});
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView style={styles.scroll}><TitleDesc data={data} /></ScrollView>
      )}
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
  scroll: {
    padding: 0,
    margin: 0,
  }
});
