import React, { useState,useEffect } from "react";
import { Text, View, ActivityIndicator, StyleSheet,TextInput } from "react-native";
import { ApiFetch } from "../../utils/ApiFetch";
import TitleDesc from '../molecules/TitleDesc'



export default TitlePanel = ({titleId}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);

  const search = () =>{
    var url = `https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${titleId}&currentCountry=US`
    ApiFetch(url).then((json) => {
      setData(json);
      setLoading(false);
    });
  }

  useEffect(() => { search() }, [])

  return (
    <View style={styles.container}>

    { loading ? <ActivityIndicator size="large" color="#0000ff" /> : <TitleDesc data={data}/> }   
       
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
