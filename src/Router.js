import React from 'react'
import { Platform, StatusBar } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'

import { HomeScreen } from './views/HomeScreen'
import { SignInScreen } from './views/SignInScreen'
import { ProfileScreen } from './views/ProfileScreen'
import { ProfileInfoScreen } from './views/ProfileInfoScreen'
import { SearchListScreen } from './views/SearchListScreen'

const headerStyle = {
  marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
}

export const SignedOut = StackNavigator({
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      headerStyle
    }
  }
})

export const SignedIn = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Profile: {
      screen: ProfileScreen,
      path: 'people/:name',
      navigationOptions: {
        title: `Profile`,
      },
    },
    ProfileInfo: {
      screen: ProfileInfoScreen,
      path: 'people/:name/info',
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params.login}'s Info`,
      }),
    },
    SearchList: {
      screen: SearchListScreen,
      path: 'search/:name',
    },
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }
    }
  }
)

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
  )
}
