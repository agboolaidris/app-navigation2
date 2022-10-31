import {View, Text} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          vitae ullam laudantium est? Sapiente cupiditate, dolores libero eum
          nostrum voluptatum ipsum dolorum tenetur id enim error. Incidunt atque
          vel accusantium.
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
