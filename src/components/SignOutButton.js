import React, { Component } from 'react';
import {
  Button,
} from 'react-native';
import { onSignOut } from '../Auth';

export const SignOutButton = ({navigation}) => {
  return (
    <Button
      title="Sign Out"
      onPress={() => {
        onSignOut()
          .then(() => navigation.navigate('SignedOut'));
      }}
    />
  )
}
