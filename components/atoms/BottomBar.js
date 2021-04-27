import React from "react";
import { View, StyleSheet,TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

export default BottomBar = ({ setContent }) => {

  const iconSize = 40;  
  return (
    <View style={styles.container}>
        <TouchableOpacity
        onPress={() => setContent("mylist")}
      >
<Svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
      >
        <Path fill="none" d="M0 0h24v24H0V0z" opacity="0.87"></Path>
        <Path
          fill="black"
          d="M3 5v14h17V5H3zm4 2v2H5V7h2zm-2 6v-2h2v2H5zm0 2h2v2H5v-2zm13 2H9v-2h9v2zm0-4H9v-2h9v2zm0-4H9V7h9v2z"
        ></Path>
      </Svg>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setContent("home")}
      >
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
      >
        <Path fill="none" d="M0 0h24v24H0V0z"></Path>
        <Path
          fill="black"
          d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
        ></Path>
      </Svg>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setContent("explore")}
      >
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
      >
        <Path fill="none" d="M0 0h24v24H0V0z"></Path>
        <Path
          fill="black"
          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        ></Path>
      </Svg>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 5
  },
});
