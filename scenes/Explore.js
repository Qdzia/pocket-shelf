import React, { useState, useEffect } from "react";
import { Text,Dimensions, View, StyleSheet, ActivityIndicator,TextInput } from "react-native";
import { ApiFetch } from "../utils/ApiFetch";
import TitleList from "../components/organisms/TitleList";
import {SECONDARY, TEXT, PRIMARY, ACCENT} from '../styles/Colors'

export default function Explore({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [text, onChangeText] = useState("");
  const [firstLook, setFirstLook] = useState(true);

  const getData = () => {
    
    setFirstLook(false);
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

  const titleList = loading ? (
    <ActivityIndicator color={ACCENT} size="large" color="#0000ff" />
  ) : (
    <TitleList data={data} mode="explore" toTitle={toTitle} />
  )

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="I'm looking for..."
        placeholderTextColor="#C3C4C7"
        onSubmitEditing={getData}
      />
      <View style={{marginBottom: '15%'}}>
      {firstLook ? <Text style={styles.subtitle}>* Find Your Favorite Titles *</Text>:titleList}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: SECONDARY,
  },
  input: {
    height: 40,
    width: Dimensions.get("window").width * 0.9,
    borderWidth: 2,
    borderRadius: 20,
    paddingLeft: 20,
    marginVertical: 5,
    fontSize: 16,
    borderColor: PRIMARY,
    color: TEXT,
    marginTop: 10,
    marginBottom: 10,
  },
  subtitle: {
    color: ACCENT,
    fontSize: 20,
    marginTop: 50,
  }
});
