import React from 'react';
import {SafeAreaView} from 'react-native';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavHeading} from '../components/Ui';

const ProfileScreen = props => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerss}>
        <NavHeading iname="bars" riname="home" title="Profile" />
      </View>
      <View style={styles.mainss}>
        <View style={styles.screen1}>
          <View style={styles.vimage}>
            <Image
              source={require('../assets/images/man.png')}
              style={{
                resizeMode: 'contain',
                width: 100,
                height: 100,
              }}
            />
          </View>
        </View>
        <View style={styles.screen2}>
          <Text style={styles.text}> Member Detail</Text>
          <View style={styles.mbview}>
            <Text style={styles.labletext}>Full Name :</Text>
            <Text style={styles.userdetail}> Bibin Maharjan</Text>
          </View>
          <View style={styles.mbview}>
            <Text style={styles.labletext}>Address :</Text>
            <Text style={styles.userdetail}> Kirtipur</Text>
          </View>
          <View style={styles.mbview}>
            <Text style={styles.labletext}>Mobile No :</Text>
            <Text style={styles.userdetail}> 9841-XXXXXXXX</Text>
          </View>
          <View style={styles.mbview}>
            <Text style={styles.labletext}>Email :</Text>
            <Text style={styles.userdetail}> Bibin@gmail.com</Text>
          </View>
        </View>
        <View style={styles.screen3}>
          <Text style={styles.text}> Payment Detail</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headerss: {
    flex: 1,
    backgroundColor: 'green',
  },
  mainss: {
    flex: 10,
  },
  vimage: {
    width: 100,
    height: 100,
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'Oxygen-Light',
  },
  screen1: {
    flex: 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen2: {
    flex: 3,
    padding: 10,
  },
  mbview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  screen3: {
    flex: 3,
    backgroundColor: 'green',
  },
  labletext: {fontFamily: 'Oxygen-Bold', fontSize: 20},
  userdetail: {fontFamily: 'Oxygen-Light', fontSize: 20},
});
export default ProfileScreen;
