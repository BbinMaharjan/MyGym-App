import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {CustomButton, InputText, NavHeading} from '../components/Ui';

const PaymentScreen = props => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerss}>
        <NavHeading iname="bars" riname="home" title="Payment" />
      </View>
      <View style={styles.mainss}>
        <ScrollView style={{backgroundColor: 'white'}}>
          <InputText label="Membership No" placeholder="eg: 001" />
          <InputText label="Full Name" placeholder="eg: Nico Robin" />
          <InputText label="Month" placeholder="eg: April" />
          <InputText label="Amount" placeholder="eg: 1000" />
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
export default PaymentScreen;
