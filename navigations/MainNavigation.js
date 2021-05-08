import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import WellcomeScreen from '../screens/WellcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import AddMemberScreen from '../screens/AddMemberScreen';
import ViewMemberScreen from '../screens/ViewMemberScreen';
import PaymentScreen from '../screens/PaymentScreen';
import ProfileScreen from '../screens/ProfileScreen';

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Wellcome"
        component={WellcomeScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Home"
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: props => (
            <Icon
              name="home"
              color={props.color}
              size={props.focused ? props.size * 1.3 : props.size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddMember"
        component={AddMemberScreen}
        options={{
          tabBarIcon: props => (
            <Icon
              name="user-plus"
              color={props.color}
              size={props.focused ? props.size * 1.3 : props.size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          tabBarIcon: props => (
            <Icon
              name="paypal"
              color={props.color}
              size={props.focused ? props.size * 1.3 : props.size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Members"
        component={ViewMemberScreen}
        options={{
          tabBarIcon: props => (
            <Icon
              name="users"
              color={props.color}
              size={props.focused ? props.size * 1.3 : props.size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: props => (
            <Icon
              name="address-card"
              color={props.color}
              size={props.focused ? props.size * 1.3 : props.size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStackNavigator;
