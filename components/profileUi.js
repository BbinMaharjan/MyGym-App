import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Icons from 'react-native-vector-icons/MaterialIcons';

const ProfileUi = props => {
  return (
    <View style={styles.mview}>
      <View style={styles.iview}>
        <Icon name={props.icon} size={23} color="gray" />
      </View>
      <View style={styles.lview}>
        <Text numberOfLines={2} style={styles.protext}>
          {props.lable}
        </Text>
      </View>
    </View>
  );
};

const PaymentList = props => {
  return (
    <View style={styles.mslist}>
      <View style={styles.leftv}>
        <View style={styles.itv}>
          <Icons name="schedule" size={25} color="gray" />
          <Text style={styles.ttv}>Date</Text>
        </View>
        <View style={styles.ibv}>
          <Text style={styles.btv}>{props.date}</Text>
        </View>
      </View>
      <View style={styles.midv}>
        <View style={styles.itv}>
          <Icons name="today" size={25} color="gray" />
          <Text style={styles.ttv}>Month</Text>
        </View>
        <View style={styles.ibv}>
          <Text style={styles.btv}>{props.month}</Text>
        </View>
      </View>
      <View style={styles.rightv}>
        <View style={styles.itv}>
          <Icons name="done" size={25} color="gray" />
          <Text style={styles.ttv}>Amount</Text>
        </View>
        <View style={styles.ibv}>
          <Text style={styles.btv}>{props.amount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mview: {flexDirection: 'row', margin: 1},
  iview: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  lview: {
    flex: 4,
    bottom: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  protext: {
    fontSize: 18,
    color: 'gray',
    fontFamily: 'Oxygen_Bold',
  },
  mslist: {
    width: '100%',
    height: '16%',
    borderColor: 'red',
    borderRightWidth: 2,
    marginBottom: 5,
    flexDirection: 'row',
    borderRadius: 10,
    borderBottomWidth: 2,
    backgroundColor: 'white',
  },
  leftv: {
    flex: 1,
  },
  midv: {
    flex: 2,
  },
  rightv: {
    flex: 1,
  },
  itv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ttv: {
    fontSize: 16,
    fontFamily: 'Girassol-Regular',
    color: 'gray',
  },
  ibv: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btv: {
    fontSize: 30,
    fontFamily: 'Oxygen-Bold',
    color: 'gray',
  },
});
export {ProfileUi, PaymentList};
