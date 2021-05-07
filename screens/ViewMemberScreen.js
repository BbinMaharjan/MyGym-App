import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {MemberUi} from '../components/listmemberUi';
import {NavHeading} from '../components/Ui';

const ViewMemberScreen = props => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerss}>
        <NavHeading iname="bars" riname="home" title="Members" />
      </View>
      <View style={styles.mainss}>
        <ScrollView style={{backgroundColor: 'white'}}>
          <MemberUi
            membershipno="001"
            fullname="Bibin Maharjan"
            mobile="9843-xxxxxxx"
            expiredate="2021/12/10"
          />
          <MemberUi
            membershipno="001"
            fullname="Bibin Maharjan"
            mobile="9843-xxxxxxx"
            expiredate="2021/12/10"
          />
          <MemberUi
            membershipno="001"
            fullname="Bibin Maharjan"
            mobile="9843-xxxxxxx"
            expiredate="2021/12/10"
          />
          <MemberUi
            membershipno="001"
            fullname="Bibin Maharjan"
            mobile="9843-xxxxxxx"
            expiredate="2021/12/10"
          />

          <MemberUi
            membershipno="001"
            fullname="Bibin Maharjan"
            mobile="9843-xxxxxxx"
            expiredate="2021/12/10"
          />

          <MemberUi
            membershipno="001"
            fullname="Bibin Maharjan"
            mobile="9843-xxxxxxx"
            expiredate="2021/12/10"
          />
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
export default ViewMemberScreen;
