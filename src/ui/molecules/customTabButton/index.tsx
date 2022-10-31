import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {TabButtomCircle, TabButtomWrapper} from './style';

const CustomTabButtom = ({
  children,
  style,
  onPress,
  accessibilityState,
}: BottomTabBarButtonProps) => {
  return (
    <TabButtomWrapper onPress={onPress}>
      {accessibilityState?.selected ? (
        <TabButtomCircle>{children}</TabButtomCircle>
      ) : (
        children
      )}
    </TabButtomWrapper>
  );
};

export default CustomTabButtom;
