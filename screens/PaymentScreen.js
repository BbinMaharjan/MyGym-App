import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {CustomButton, InputText} from '../components/Ui';

const PaymentScreen = props => {
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: 'white'}}>
        <InputText label="Membership No" placeholder="eg: 001" />
        <InputText label="Full Name" placeholder="eg: Nico Robin" />
        <InputText label="Month" placeholder="eg: April" />
        <InputText label="Amount" placeholder="eg: 1000" />
        <CustomButton iconname="save" buttontitle="save" bgcolor="green" />
        <CustomButton iconname="close" buttontitle="cancle" bgcolor="red" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default PaymentScreen;
