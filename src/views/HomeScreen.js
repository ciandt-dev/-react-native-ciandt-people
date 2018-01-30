import React, { Component } from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { SearchInput } from '../components/SearchInput'
import { SignOutButton } from '../components/SignOutButton'
import { getUsers } from '../services/peopleAPI'

export class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerRight: <SignOutButton navigation={navigation} />
  });

  state = {
    isLoading: false,
    name: ''
  }

  onChangeSearchText = (txt) => {
    this.setState({name: txt})
  }
  onPressSearch = () => {
    this.setState({isLoading: true})

    getUsers(this.state.name)
      .then(res => {
        res.length == 1
          ? this.props.navigation.navigate('Profile', res[0])
          : this.props.navigation.navigate('SearchList', {
            name: this.state.name,
            results: res
          })
      })
      .then(() => this.setState({isLoading: false}))
      .catch(console.error);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')}
          resizeMode='contain'
          style={styles.logo}
          />
        <SearchInput
          onChangeText={this.onChangeSearchText}
          value={this.state.name}
          autoCapitalize={'none'}
        />
        {
          !this.state.isLoading
          ? <Button
            title='Search'
            onPress={this.onPressSearch}
            disabled={!this.state.name}
          />
          : <ActivityIndicator size="small" color="#125177" />
        }
        <View style={{flex: 1,}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 40,
  },
  logo: {
    width: 320,
    marginBottom: 40,
  },
})
