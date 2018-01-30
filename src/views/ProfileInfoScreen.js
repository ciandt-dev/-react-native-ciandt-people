import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {
  getAvatar,
  getUserByLogin
} from '../services/peopleAPI'
import { Profile } from '../components/Profile'
import { ProfileInfo } from '../components/ProfileInfo'

export class ProfileInfoScreen extends Component {
  static navigationOptions = {
  };

  state = {
    ...this.props.navigation.state.params,
    isLoading: false,
  }

  onItemPress = (login) => {
    this.setState({isLoading: true})

    getUserByLogin(login)
      .then(res => this.props.navigation.navigate('Profile', res))
      .then(() => this.setState({isLoading: false}))
      .catch(console.error);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Profile {...this.state} />
          <ProfileInfo
            {...this.props}
            {...this.state}
            onItemPress={this.onItemPress}
            isLoading={this.state.isLoading}
          />
        </ScrollView>
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
