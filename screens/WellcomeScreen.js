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
          info="Wellcome To Gym Application ..Wellcome To Gym Application ..
          Wellcome To Gym Application ..Wellcome To Gym Application ..
          Wellcome To Gym Application .. Wellcome To Gym Application ..
          Wellcome To Gym Application ..Wellcome To Gym Application ..
          Wellcome To Gym Application ..Wellcome To Gym Application ..
        "
        />
      </View>
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
});
export default WellcomeScreen;
