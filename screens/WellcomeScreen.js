import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';

const WellcomeScreen = props => {
  const HomeScreen = () => {
    props.navigation.navigate('Home');
  };
  return (
    <View style={styles.screen}>
      <Text>WellcomeScreen</Text>
      <Button title="Home Screen" type="outline" onPress={HomeScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default WellcomeScreen;
