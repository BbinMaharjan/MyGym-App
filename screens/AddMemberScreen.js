import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {CustomButton, InputText, NavHeading} from '../components/Ui';
import {useTheme} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {addMembersToFirebase, getAllMembers} from '../store/actions/members';

const AddMemberScreen = props => {
  const {colors} = useTheme();

  const [fullname, setFullname] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [membershipno, setMembershipno] = useState('');
  const [membershiptype, setMembershiptype] = useState('');
  const [joiningdate, setJoiningdate] = useState('');

  const dispatch = useDispatch();

  const clean = () => {
    setFullname('');
    setAddress('');
    setMobile('');
    setEmail('');
    setMembershipno('');
    setMembershiptype('');
    setJoiningdate('');
  };

  const submitForm = () => {
    const member = {
      fullname,
      address,
      mobile,
      email,
      membershipno,
      membershiptype,
      joiningdate,
    };
    dispatch(addMembersToFirebase(member));
    clean();
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerss}>
        <NavHeading iname="bars" riname="home" title="Gym Member" />
      </View>
      <View style={styles.mainss}>
        <ScrollView>
          <InputText
            label="Full Name"
            placeholder="eg: Nico Robin"
            value={fullname}
            onChangeText={text => setFullname(text)}
          />
          <InputText
            label="Address"
            placeholder="eg: Sunny Go"
            value={address}
            onChangeText={text => setAddress(text)}
          />
          <InputText
            label="Mobile No"
            placeholder="eg: 980-XXXXXX"
            value={mobile}
            onChangeText={text => setMobile(text)}
          />
          <InputText
            label="Email"
            placeholder="eg: robin@gmail.com"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <InputText
            label="Membership No"
            placeholder="eg: 001"
            value={membershipno}
            onChangeText={text => setMembershipno(text)}
          />
          <InputText
            label="Membership Type"
            placeholder="eg: Monthly"
            value={membershiptype}
            onChangeText={text => setMembershiptype(text)}
          />
          <InputText
            label="Joining Date"
            placeholder="eg: 2021/01/01"
            value={joiningdate}
            onChangeText={text => setJoiningdate(text)}
          />
          <CustomButton
            iconname="save"
            buttontitle="save"
            bgcolor="green"
            onPress={submitForm}
          />
          <CustomButton iconname="close" buttontitle="cancle" bgcolor="red" />
        </ScrollView>
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
});
export default AddMemberScreen;
