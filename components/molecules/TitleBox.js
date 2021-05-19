import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import SeenButton from "../atoms/SeenButton";
import {TEXT} from '../../styles/Colors'

export default TitleBox = ({ data, mode, toTitle }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touch} onPress={() => toTitle(data.id)} activeOpacity={1}>
        <Image style={styles.img} source={{ uri:  data.url}} />
        <View style={styles.info}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.text}>{data.year}</Text>
          <Text style={styles.text}>{data.type}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.actionPanel}>
        {mode === 'mylist' ? <SeenButton id={data.id} seen={data.seen}/> : <></>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  touch: {
    flexDirection: "row",
    width: "90%",
  },
  info: {
    width: "70%",
    paddingLeft: 10,
  },
  actionPanel: {
    width: "10%",
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 15,
    color: TEXT
  },
  img: {
    width: "30%",
    height: Dimensions.get("window").width * 0.3 * 1.34,
  },
  title: {
    flexShrink: 1,
    fontSize: 20,
    color: TEXT
  },
});
