import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ViewMemberScreen = props => {
  return (
    <View>
      <View style={styles.listview}>
        <View style={styles.imagess}>
          <Text>Image</Text>
        </View>
        <View style={styles.textss}>
          <Text>TextView</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listview: {
    width: '95%',
    height: 100,
    margin: 10,
    padding: 2,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
  },
  imagess: {
    flex: 1,
    backgroundColor: 'red',
    margin: 3,
  },
  textss: {
    flex: 2,
    backgroundColor: 'green',
    margin: 3,
    padding: 5,
  },
});
export default ViewMemberScreen;
