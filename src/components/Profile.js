import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native'
import { getAvatar } from '../services/peopleAPI'

export const Profile = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={getAvatar(props.login)}
        resizeMode='contain'
        style={styles.avatar}
        />
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.position}>{props.position} ({props.location})</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 30,
  },
  avatar: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#125177',
  },
  position: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 40,
  },
})
