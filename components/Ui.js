import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import color from '../constant/color';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavHeading = props => {
  return (
    <View style={styles.navheading}>
      <View
        style={{
          ...styles.iconContainer,
          top: 5,
          left: 5,
          height: 40,
          width: 40,
        }}>
        <Icon
          name={props.iname}
          size={25}
          color="white"
          onPress={props.onclick}
        />
      </View>
      <Text style={styles.navtext}>{props.title}</Text>
      <View
        style={{
          ...styles.iconContainer,
          backgroundColor: color.lightRed,
          top: 5,
          left: 15,
          height: 40,
          width: 40,
        }}>
        <Icon name={props.riname} size={30} color="white" />
      </View>
    </View>
  );
};

const CardView = props => {
  return (
    <View style={{...styles.CardView, backgroundColor: props.color}}>
      <TouchableOpacity onPress={props.onPress}>
        <Image source={props.imagesource} style={styles.image} />
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            top: 5,
            fontFamily: 'Oxygen-Regular',
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
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
      <Text numberOfLines={5} ellipsizeMode="tail" style={styles.info}>
        {props.info}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  //navheading
  navheading: {
    width: '100%',
    height: 50,
    backgroundColor: color.lightRed,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: color.lightRed,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    borderColor: color.lightYellow,
    borderWidth: 1,
  },
  navtext: {
    fontSize: 30,
    color: 'white',
    marginLeft: 30,
    textAlign: 'center',
    letterSpacing: 2,
    fontFamily: 'Girassol-Regular',
  },

  //card style
  CardView: {
    width: '40%',
    height: 150,
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 2,
  },
  image: {
    flex: 1,
    width: 200,
    height: 200,
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
    fontFamily: 'Girassol-Regular',
    fontSize: 30,
    color: 'white',
    letterSpacing: 4,
  },
  subtitle: {
    fontFamily: 'Girassol-Regular',
    fontSize: 25,
    color: 'gray',
    letterSpacing: 3,
  },
  info: {
    fontFamily: 'Oxygen-Light',
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
    justifyContent: 'center',
  },
});

export {NavHeading, CardView, InputText, CustomButton, Title};
