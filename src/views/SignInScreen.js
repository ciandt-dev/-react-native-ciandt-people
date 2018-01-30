import React, { Component } from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { onSignIn } from "../Auth";

export class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Sign In',
  };

  state = {
    username: '',
    password: '',
  }

  onChangeUsername = (txt) => {
    this.setState({username: txt})
  }
  onChangePassword = (txt) => {
    this.setState({password: txt})
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')}
          resizeMode="contain"
          style={styles.logo}
          />
        <Text>Username</Text>
        <TextInput
          style={styles.field_inpput}
          placeholder="Username..."
          autoCapitalize={'none'}
          value={this.state.username}
          onChangeText={this.onChangeUsername}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.field_inpput}
          placeholder="Password..."
          autoCapitalize={'none'}
          secureTextEntry
          value={this.state.password}
          onChangeText={this.onChangePassword}
        />

        <Button
          title="Sign In"
          disabled={!this.state.username || !this.state.password}
          onPress={() => {
            onSignIn(this.state.username, this.state.password)
              .then(() => this.props.navigation.navigate('SignedIn'));
          }}
        />
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
  field_inpput: {
    height: 42,
    width: 320,
    borderColor: '#DCDFE3',
    borderWidth: 2,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
})
