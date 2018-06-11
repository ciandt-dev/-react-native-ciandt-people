import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { getAvatar } from '../services/peopleAPI'

export const ProfileInfo = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <TouchableOpacity onPress={() => props.onItemPress(props.mentorLogin)}>
          <View style={styles.manager__item}>
            <Image
              source={getAvatar(props.mentorLogin)}
              resizeMode='contain'
              style={styles.manager__avatar}
            />
            <Text style={styles.manager__lbl}>{props.mentorLogin}</Text>
            <Text style={styles.manager__lbl_small}>Coach</Text>
          </View>
        </TouchableOpacity>
        <ActivityIndicator
          size="small"
          color="#fff"
          animating={props.isLoading}
        />
        <TouchableOpacity onPress={() => props.onItemPress(props.managerLogin)}>
          <View style={styles.manager__item}>
            <Image
              source={getAvatar(props.managerLogin)}
              resizeMode='contain'
              style={styles.manager__avatar}
            />
            <Text style={styles.manager__lbl}>{props.managerLogin}</Text>
            <Text style={styles.manager__lbl_small}>PDM</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'row',
    backgroundColor: '#1f9ddf',
    paddingBottom: 20,
  },
  info: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: -50,
  },
  manager__item: {
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 20,
  },
  manager__avatar: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: '#1f9ddf',
    borderRadius: 50,
    marginBottom: 5,
  },
  manager__lbl: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  manager__lbl_small: {
    fontSize: 14,
    color: '#fff',
  },
})
