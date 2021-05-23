import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileUi = props => {
  return (
    <View style={styles.mview}>
      <View style={styles.iview}>
        <Icon name={props.icon} size={25} color="gray" />
      </View>
      <View style={styles.lview}>
        <Text numberOfLines={2} style={styles.protext}>
          {props.lable}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mview: {flexDirection: 'row', margin: 1},
  iview: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  lview: {
    flex: 4,
    left: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  protext: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Oxygen_Bold',
  },
});
export default ProfileUi;
