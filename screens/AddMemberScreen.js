import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {CustomButton, InputText, NavHeading} from '../components/Ui';

const AddMemberScreen = props => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerss}>
        <NavHeading iname="bars" riname="home" title="Gym Member" />
      </View>
      <View style={styles.mainss}>
        <ScrollView>
          <InputText label="Full Name" placeholder="eg: Nico Robin" />
          <InputText label="Address" placeholder="eg: Sunny Go" />
          <InputText label="Mobile No" placeholder="eg: 980-XXXXXX" />
          <InputText label="Email" placeholder="eg: robin@gmail.com" />
          <InputText label="Membership No" placeholder="eg: 001" />
          <InputText label="Membership Type" placeholder="eg: Monthly" />
          <InputText label="Joining Date" placeholder="eg: 2021/01/01" />
          <CustomButton iconname="save" buttontitle="save" bgcolor="green" />
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
