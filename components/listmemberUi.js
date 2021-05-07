import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const MemberUi = props => {
  return (
    <View style={styles.listview}>
      <View style={styles.imagess}>
        <Image
          style={styles.image}
          source={require('../assets/images/gymzs.png')}
        />
      </View>
      <View style={styles.textss}>
        <View style={styles.ctext}>
          <Text style={styles.text}>MemberShip No :</Text>
          <Text style={styles.texti}> {props.membershipno}</Text>
        </View>
        <View style={styles.ctext}>
          <Text style={styles.text}>Full Name :</Text>
          <Text style={styles.texti}> {props.fullname}</Text>
        </View>
        <View style={styles.ctext}>
          <Text style={styles.text}>Mobile :</Text>
          <Text style={styles.texti}> {props.mobile}</Text>
        </View>
        <View style={styles.ctext}>
          <Text style={styles.text}>Expire Date :</Text>
          <Text style={styles.texti}> {props.expiredate}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listview: {
    width: '100%',
    height: 100,
    marginBottom: 3,
    padding: 2,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    borderRadius: 20,
    borderColor: 'yellow',
    borderRightWidth: 3,
    borderBottomWidth: 3,
    overflow: 'hidden',
  },
  imagess: {
    flex: 1,
    margin: 3,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 50,
  },
  textss: {
    flex: 2,
    margin: 3,
    padding: 5,
  },
  ctext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
    overflow: 'hidden',
  },
  text: {
    fontFamily: 'Oxygen-Regular',
    fontWeight: 'bold',
  },
  texti: {},
});
export {MemberUi};
