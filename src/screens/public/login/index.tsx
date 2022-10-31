import {Button, Text} from 'react-native';
import React from 'react';
import {Container} from '../../../ui/atoms/container';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParams} from '../../../@types/navigation';

type Props = NativeStackScreenProps<AuthStackParams>;
const LoginScreen = ({navigation, route}: Props) => {
  return (
    <Container>
      <Text>Login Screen</Text>
      <Button
        title="Go To Register"
        onPress={() => navigation.push('Register')}
      />
    </Container>
  );
};

export default LoginScreen;
