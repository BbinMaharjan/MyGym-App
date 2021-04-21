import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const CardView = props => {
  return (
    <View style={{...styles.CardView, backgroundColor: props.color}}>
      <Image source={props.imagesource} style={styles.image} />
      <Text style={{color: 'white', fontSize: 20}}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  CardView: {
    width: '48%',
    height: 200,
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: 200,
    height: 200,
    borderRadius: 50,
    resizeMode: 'contain',
  },
});

export {CardView};
