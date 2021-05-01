import React, {useState} from "react";
import { Text, View, StyleSheet} from "react-native";
import Logo from '../../assets/Logo'

export default Header = () => {

  return (
    <View style={styles.container}>
      <Logo/>
    
    <Text style={styles.text}>Pocket Shelf</Text>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row'
    
  },
  text: {
      marginHorizontal: 10,
      fontWeight: 'bold',
      fontSize: 18
  }
});
