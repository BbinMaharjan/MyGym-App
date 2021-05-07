import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {Title} from '../components/Ui';

const WellcomeScreen = props => {
  const HomeScreen = () => {
    props.navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.image}>
        <TouchableOpacity onPress={HomeScreen}>
          <Image
            source={require('../assets/images/building.png')}
            style={{
              resizeMode: 'contain',
              width: 150,
              height: 150,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Title
          title="Wellcome"
          subtitle="Hello There!!!"
          info="Wellcome To Gym Application. This App Help To Add New Gym Member In Real Time Database Firebase.This App User Can Also  View Member Profile.
          App User Can Also Search The Gym Memeber. 
        "
        />
      </View>
      <TouchableOpacity onPress={HomeScreen}>
        <Text style={styles.next}>Next </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  image: {
    alignItems: 'center',
    marginTop: 100,
    padding: 10,
  },
  title: {
    padding: 10,
    marginBottom: 10,
  },
  next: {
    fontFamily: 'Girassol-Regular',
    color: 'white',
    fontSize: 50,
    letterSpacing: 3,
    marginLeft: 250,
    marginTop: 50,
  },
});
export default WellcomeScreen;
