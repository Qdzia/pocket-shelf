import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import TitleBox from "../molecules/TitleBox";

export default TitleList = ({ data, mode, toTitle }) => {

  const renderItem = ({ item }) => {
    return ( <TitleBox data={item} mode={mode} toTitle={toTitle}/>);
  };

  return (
    <View>
      <FlatList
        style={styles.container}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  flatList: {},
});
