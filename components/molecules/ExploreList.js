import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
} from "react-native";
import ItemBase from '../atoms/ItemBase'



export default ExploreList = ({ data }) => {

  const renderItem = ({ item }) => {

    var url = item.image !== undefined ? item.image.url : 'https://m.media-amazon.com/images/M/MV5BMjE5NTk5NDg3OV5BMl5BanBnXkFtZTgwNDExNzg2MDE@._V1_.jpg';
    return (
        <ItemBase
        title={item.title}
        year={item.year}
        type={item.titleType}
        url={url}
      />
    );
  };

  return (
    <View >
      <FlatList
      style={styles.container}
        data={data.results}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      
    </View>
  );
};
//
const styles = StyleSheet.create({
  container: {
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  flatList:{

  }
});
