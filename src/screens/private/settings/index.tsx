import {Text} from 'react-native';
import React from 'react';
import {Container} from '../../../ui/atoms/container';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParams} from '../../../@types/navigation';

type Props = NativeStackScreenProps<AuthStackParams>;
const SettingScreen = ({navigation, route}: Props) => {
  return (
    <Container>
      <Text>Settings Screen</Text>
    </Container>
  );
};

export default SettingScreen;
