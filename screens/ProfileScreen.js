import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {NavHeading} from '../components/Ui';

import {useDispatch, useSelector} from 'react-redux';
import {getOneMembers} from '../store/actions/members';
import {PaymentList, ProfileUi} from '../components/profileUi';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
            </View>
            <View style={styles.rightv}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 25,
                  borderColor: 'green',
                  borderWidth: 1,
                  top: 0,
                  backgroundColor: 'white',
                }}>
                <Text style={{...styles.protext, color: 'green'}}>
                  Membership No:{' '}
                  <Text style={{...styles.protext, color: 'black'}}>
                    {result.membershipno}
                  </Text>
                </Text>
              </View>
              <ProfileUi icon="id-card" lable={result.fullname} />
              <ProfileUi icon="envelope" lable={result.email} />
              <ProfileUi icon="home" lable={result.address} />
              <ProfileUi icon="phone" lable={result.mobile} />
              <ProfileUi icon="calendar" lable={result.membershiptype} />
            </View>
          </View>
          <View style={styles.screen2}>
            <View
              style={{
                padding: 1,
                resizeMode: 'cover',
                borderRadius: 10,
                justifyContent: 'center',
                flexWrap: 'wrap',
                borderColor: 'green',
                borderWidth: 1,
                flexDirection: 'row',
                top: 1,
                position: 'absolute',
                backgroundColor: 'white',
              }}>
              <Icon name="history" size={25} color="red" />
              <Text style={{...styles.protext, color: 'green'}}>
                {' '}
                Payment Detail{' '}
              </Text>
            </View>
          </View>

          <View style={styles.screen3}>
            <ScrollView>
              <PaymentList date="01" month="January" amount="1000" />
              <PaymentList date="01" month="February" amount="1000" />
              <PaymentList date="01" month="March" amount="1000" />
              <PaymentList date="01" month="April" amount="1000" />
              <PaymentList date="01" month="May" amount="1000" />
              <PaymentList date="01" month="May" amount="1000" />
            </ScrollView>
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
    width: 160,
    height: 160,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 100,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  screen1: {
    flex: 5,
    flexDirection: 'row',
  },
  leftv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightv: {
    flex: 1,
    flexDirection: 'column',
    bottom: 0,
    top: 3,
    overflow: 'hidden',
  },
  screen2: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  screen3: {
    flex: 9,
    padding: 5,
  },
  protext: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Girassol-Regular',
  },
});
export default ProfileScreen;
