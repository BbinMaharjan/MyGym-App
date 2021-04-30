import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Input, Button} from 'react-native-elements';

const CardView = props => {
  return (
    <View style={{...styles.CardView, backgroundColor: props.color}}>
      <Image source={props.imagesource} style={styles.image} />
      <Text style={{color: 'white', fontSize: 20}}>{props.title}</Text>
    </View>
  );
};
const InputText = props => {
  return (
    <View>
      <Input
        label={props.label}
        placeholder={props.placeholder}
        underlineColorAndroid="lightgreen"
        containerStyle={styles.consty}
        inputStyle={styles.insty}
        inputContainerStyle={styles.incosty}
        labelStyle={styles.labsty}
      />
    </View>
  );
};

const CustomButton = props => {
  return (
    <View>
      <Button
        icon={{
          name: props.iconname,
          size: 20,
          color: 'white',
        }}
        title={props.buttontitle}
        buttonStyle={{
          backgroundColor: props.bgcolor,
          margin: 5,
          borderRadius: 20,
        }}
      />
    </View>
  );
};
const Title = props => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
      <Text numberOfLines={3} ellipsizeMode="tail" style={styles.info}>
        {props.info}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  //card style
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
  //input style
  consty: {
    backgroundColor: 'transparent',
    top: 5,
    margin: 1,
  },
  insty: {
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 2,
    borderColor: 'lightblue',
  },
  incosty: {
    borderBottomWidth: 0,
    bottom: 0,
    top: 5,
  },
  labsty: {
    fontSize: 18,
    fontFamily: 'Oxygen-Bold',
    fontWeight: 'bold',
  },
  //Title
  title: {
    fontFamily: 'Oxygen-Bold',
    fontSize: 30,
    color: 'white',
    letterSpacing: 2,
  },
  subtitle: {
    fontFamily: 'Oxygen-Regular',
    fontSize: 25,
    color: 'gray',
  },
  info: {
    fontFamily: 'Oxygen-Light',
    fontSize: 15,
    color: 'gray',
  },
});

export {CardView, InputText, CustomButton, Title};
