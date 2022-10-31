import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/private/home';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import SettingScreen from '../screens/private/settings';
import {ButtomStackParams} from '../@types/navigation';
import NotificationScreen from '../screens/private/notification';
import WalletScreen from '../screens/private/wallet';
import {OutlineHomeIcon, SolidHomeIcon} from '../icons/home';
import DrawerNavigator from './drawer';
import {theme} from '../assets/theme';
import CustomTabButtom from '../ui/molecules/customTabButton';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator<ButtomStackParams>();

function BottomTabNavigator() {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        tabBarStyle: style.tabBarStyle,
        tabBarButton: props => <CustomTabButtom {...props} />,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.dominant,
        tabBarInactiveTintColor: theme.colors.dominant,
        headerRight: () => (
          <Pressable onPress={() => navigation.openDrawer()}>
            <Text>Togle</Text>
          </Pressable>
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, color, focused}) => {
            return focused ? (
              <SolidHomeIcon size={size} color={color} />
            ) : (
              <OutlineHomeIcon size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
const style = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: theme.colors.accent,
    // position: 'absolute',
    // left: 20,
    // bottom: 20,
    // right: 20,
    // borderTopWidth: 0,
  },
});
