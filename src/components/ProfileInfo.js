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
      <TouchableOpacity onPress={() => props.onItemPress(props.mentorLogin)}>
        <View style={styles.manager__item}>
          <Image
            source={getAvatar(props.mentorLogin)}
            resizeMode='contain'
            style={styles.manager__avatar}
          />
          <Text style={styles.manager__lbl}>{props.mentorLogin}</Text>
        </View>
      </TouchableOpacity>
      <ActivityIndicator size="small" color="#125177" animating={props.isLoading} />
      <TouchableOpacity onPress={() => props.onItemPress(props.managerLogin)}>
        <View style={styles.manager__item}>
          <Image
            source={getAvatar(props.managerLogin)}
            resizeMode='contain'
            style={styles.manager__avatar}
          />
          <Text style={styles.manager__lbl}>{props.managerLogin}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
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
    borderColor: 'rgba(0,0,0, 0.15)',
    borderRadius: 50,
  },
  manager__lbl: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
