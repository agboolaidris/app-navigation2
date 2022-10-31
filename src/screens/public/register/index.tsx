import {Text, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Container} from '../../../ui/atoms/container';
import {AuthStackParams} from '../../../@types/navigation';

type Props = NativeStackScreenProps<AuthStackParams>;
const RegisterScreen = ({navigation, route}: Props) => {
  return (
    <Container>
      <Text>Register Screen</Text>
      <Button title="Go To Login" onPress={() => navigation.push('Login')} />
    </Container>
  );
};

export default RegisterScreen;
