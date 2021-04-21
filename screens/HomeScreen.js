import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CardView} from '../components/Ui';
import Color from '../constant/color';

const HomeScreen = props => {
  return (
    <View>
      <View style={styles.m}>
        <CardView
          title="Add Member"
          imagesource={require('../assets/images/man.png')}
          color={Color.lightBlue}
        />
        <CardView
          title="Payment"
          imagesource={require('../assets/images/healthy.png')}
          color={Color.lightRed}
        />
      </View>
      <View style={styles.m}>
        <CardView
          title="View Member"
          imagesource={require('../assets/images/treadmill.png')}
          color={Color.lightGreen}
        />
        <CardView
          title="Help"
          imagesource={require('../assets/images/gymsport.png')}
          color={Color.lightYellow}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  m: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
  },
});
export default HomeScreen;
