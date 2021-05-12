import React, { useState } from "react";
import { Text, View, ActivityIndicator, StyleSheet,TextInput } from "react-native";
import { ApiFetch } from "../../utils/ApiFetch";
import ExploreList from '../molecules/ExploreList'


export default TitlePanel = ({titleId}) => {
  const [loading, setLoading] = useState(true);
  const [text, onChangeText] = useState("");
  const [data, setData] = useState(undefined);

  // const search = () =>{
  //   var url = `https://imdb8.p.rapidapi.com/title/find?q=${text}`
  //   ApiFetch(url).then((json) => {
  //     setData(json);
  //     setLoading(false);
  //   });
  // }
  //{loading ? <ActivityIndicator size="large" color="#0000ff" /> : <ExploreList data={data}/> } 

  return (
    <View style={styles.container}>

      <Text>Otwiram</Text>
      <Text>{titleId}</Text>
       
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
    paddingLeft: 20
  },
});
