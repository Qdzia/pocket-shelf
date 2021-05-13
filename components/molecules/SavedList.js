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
import ItemBase from "../atoms/ItemBase";

export default SavedList = ({ data }) => {

  const renderItem = ({ item }) => {
    
    return (
          <ItemBase
            id={item.id}
            title={item.title}
            year={item.year}
            type={item.type}
            url={item.url}
            modeSeen={true}/>
    );
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
