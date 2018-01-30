import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { ProfileInfoButton } from '../components/ProfileInfoButton'
import { Profile } from '../components/Profile'

export class ProfileScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const hasExtraInfo = navigation.state.params.coach || navigation.state.params.pdm
    return hasExtraInfo
      ? { headerRight: <ProfileInfoButton navigation={navigation} /> }
      : {}
  }

  state = { ...this.props.navigation.state.params }

  render() {
    return (
      <View style={styles.container}>
        <Profile {...this.state} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
})
