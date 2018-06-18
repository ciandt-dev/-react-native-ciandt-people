import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
} from 'react-native'
import { getAvatar } from '../services/peopleAPI'

export const Profile = (props) => {
  const imgAvatar = getAvatar(props.login)
  return (
    <ImageBackground
      source={imgAvatar}
      blurRadius={2}
      opacity={0.3}
      resizeMode='cover'
      style={styles.container}>
      <Image
        source={imgAvatar}
        resizeMode='contain'
        style={styles.avatar}
        />
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.position}>{props.position} ({props.location})</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#1f9ddf',
    paddingTop: 30,
    paddingBottom: 60,
  },
  avatar: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  position: {
    fontSize: 16,
    marginBottom: 40,
    color: '#fff',
  },
})
