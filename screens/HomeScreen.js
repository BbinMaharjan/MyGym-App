import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ImageBackground} from 'react-native';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {CardView, NavHeading} from '../components/Ui';
import Color from '../constant/color';

const HomeScreen = props => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.topview}>
        <Image
          source={require('../assets/images/gympic.jpg')}
          style={styles.image}
        />
        <NavHeading iname="bars" riname="home" title="Home" />
      </View>
      <View style={styles.cardview}>
        <View style={styles.m}>
          <CardView
            title="Add Member"
            imagesource={require('../assets/images/man.png')}
            color={Color.lightBlue}
            onPress={() => {
              props.navigation.navigate('AddMember');
            }}
          />
          <CardView
            title="Payment"
            imagesource={require('../assets/images/healthy.png')}
            color={Color.lightRed}
            onPress={() => {
              props.navigation.navigate('Payment');
            }}
          />
        </View>
        <View style={styles.m}>
          <CardView
            title="ViewMember"
            imagesource={require('../assets/images/people.png')}
            color={Color.lightGreen}
            onPress={() => {
              props.navigation.navigate('Members');
            }}
          />
          <CardView
            title="Help"
            imagesource={require('../assets/images/gymsport.png')}
            color={Color.lightYellow}
            onPress={() => {
              props.navigation.navigate('Wellcome');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'gray',
  },
  topview: {
    flex: 2,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  cardview: {
    flex: 3,
    margin: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: 'red',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  m: {
    flexDirection: 'row',
    marginTop: 10,
    padding: 5,
    justifyContent: 'space-evenly',
  },
});
export default HomeScreen;
