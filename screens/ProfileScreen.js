import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {NavHeading} from '../components/Ui';

import {useDispatch, useSelector} from 'react-redux';
import {getOneMembers} from '../store/actions/members';
import ProfileUi from '../components/profileUi';

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
            <View style={styles.leftv}>
              <View style={styles.vimage}>
                <Image
                  source={require('../assets/images/man.png')}
                  style={{
                    resizeMode: 'contain',
                    width: 120,
                    height: 120,
                  }}
                />
              </View>
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: 'red',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-end',
                  left: 0,
                  bottom: 0,
                }}></View>
            </View>
            <View style={styles.rightv}>
              <View
                style={{
                  backgroundColor: 'gray',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 25,
                  borderColor: 'black',
                  borderWidth: 2,
                  top: 0,
                }}>
                <Text style={{...styles.protext, color: 'white'}}>
                  M.No:{'   '}
                  <Text style={{...styles.protext, color: 'white'}}>
                    {result.membershipno}
                  </Text>
                </Text>
              </View>
              <ProfileUi icon="user" lable={result.fullname} />
              <ProfileUi icon="user" lable={result.email} />
              <ProfileUi icon="user" lable={result.address} />
              <ProfileUi icon="user" lable={result.mobile} />
              <ProfileUi icon="user" lable={result.membershiptype} />
              <ProfileUi icon="user" lable={result.membershipno} />
            </View>
          </View>
          <View style={styles.screen2}>
            <Text>Down</Text>
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
    width: 140,
    height: 140,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 100,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  screen1: {
    flex: 1,
    flexDirection: 'row',
  },
  leftv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightv: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  screen2: {
    flex: 2,
    backgroundColor: 'gray',
  },
  protext: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Girassol-Regular',
  },
});
export default ProfileScreen;
