import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {NavHeading} from '../components/Ui';

import {useDispatch, useSelector} from 'react-redux';
import {getOneMembers} from '../store/actions/members';

const ProfileScreen = ({route}) => {
  const {
    params: {memberid},
  } = route;
  const dispatch = useDispatch();
  const [result, setResult] = React.useState({
    address: '',
    email: '',
    fullname: '',
    joiningdate: '',
    membershipno: '',
    membershiptype: '',
    mobile: '',
  });
  // console.log(memberid);
  React.useEffect(() => {
    dispatch(getOneMembers(memberid));
  }, [memberid]);
  const member = useSelector(state => state.membersState.member);
  React.useEffect(() => {
    setResult(member);
  }, [member]);
  //console.log(result);
  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.image}>
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
            <Text style={styles.text}> Member Detail </Text>
            <View style={styles.mbview}>
              <Text style={styles.labletext}>Full Name :</Text>
              <Text style={styles.userdetail}>{result.fullname} </Text>
            </View>
            <View style={styles.mbview}>
              <Text style={styles.labletext}>Address :</Text>
              <Text style={styles.userdetail}>{result.address}</Text>
            </View>
            <View style={styles.mbview}>
              <Text style={styles.labletext}>Mobile No :</Text>
              <Text style={styles.userdetail}> {result.mobile}</Text>
            </View>
            <View style={styles.mbview}>
              <Text style={styles.labletext}>Email :</Text>
              <Text style={styles.userdetail}> {result.email}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  headerss: {
    flex: 1,
    backgroundColor: 'green',
  },
  mainss: {
    flex: 10,
  },
  vimage: {
    width: 120,
    height: 110,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 25,
    backgroundColor: 'white',
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
  },
  labletext: {fontFamily: 'Oxygen-Bold', fontSize: 20},
  userdetail: {fontFamily: 'Oxygen-Light', fontSize: 20},
});
export default ProfileScreen;
