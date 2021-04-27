import React from 'react';
import { Text, View,Button } from 'react-native';

export default function Loading({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading Screen</Text>
        <Button
          title="Go to Explore"
          onPress={() => navigation.navigate('Explore')}
        />
      </View>
    );
  }