


import Ionicons from 'react-native-ionicons'
import React from 'react';
import { Button } from 'react-native';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useLinkTo } from '@react-navigation/native';
import HomeScreen from './screens/Home';
import Icon from 'react-native-vector-icons/FontAwesome';

function Like({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <Button
        title="Like"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}


const Tab = createMaterialBottomTabNavigator();
export default function Routes() {
  const linkTo = useLinkTo();
  return (
 <Tab.Navigator
 initialRouteName="Home"
 activeColor="#f0edf6"
 inactiveColor="#3e2465"
 barStyle={{ backgroundColor: '#694fad' }}

 screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'life-ring'
                : 'life-ring';
            } else if (route.name === 'Like') {
              iconName = focused ? 'heart' : 'heart';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
 >
 
 <Tab.Screen name="Home" component={HomeScreen} />
 <Tab.Screen name="Like" component={Like} />
 
 
</Tab.Navigator>
  );
}


