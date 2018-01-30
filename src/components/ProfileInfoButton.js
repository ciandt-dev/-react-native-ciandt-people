import React, { Component } from 'react';
import {
  Button,
} from 'react-native';

export const ProfileInfoButton = ({navigation}) => {
  return (
    <Button
      title="Info"
      onPress={() => navigation.navigate('ProfileInfo', navigation.state.params)}
    />
  )
}
