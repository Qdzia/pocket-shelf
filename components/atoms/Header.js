import React from "react";
import { Text, View, StyleSheet} from "react-native";
import Logo from '../../assets/Logo'
import { ACCENT } from "../../styles/Colors";

export default Header = () => {

  return (
    <View style={styles.container}>
      <Logo size={28}/>
    
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
      fontSize: 18,
      color: ACCENT
  }
});
