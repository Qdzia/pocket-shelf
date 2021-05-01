import React, { useState } from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
import { ApiFetch } from "../../utils/ApiFetch";
import ExploreList from '../molecules/ExploreList'

var data = undefined;

export default ExplorePanel = () => {
  const [loading, setLoading] = useState(true);

  ApiFetch().then((json) => {
    data = json;
    setLoading(false);
  });

  var SearchList = <Text>Find Movies</Text>;

  return (
    <View style={styles.container}>
       {loading ? <ActivityIndicator size="large" color="#0000ff" /> : <ExploreList data={data}/> } 
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
});
