import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './auth';
import BottomTabNavigator from './bottom-tab';
import DrawerNavigator from './drawer';

function Navigation() {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      {/* <BottomTabNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
