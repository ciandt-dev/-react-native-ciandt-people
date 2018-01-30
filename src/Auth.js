import { AsyncStorage } from 'react-native'
import base64 from 'base-64';

const STG_API_KEY = 'API_KEY'

export const onSignIn = (username, password) => AsyncStorage.setItem(STG_API_KEY, base64.encode(`${username}:${password}`))
export const onSignOut = () => AsyncStorage.removeItem(STG_API_KEY)

export let API_KEY = null
export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(STG_API_KEY)
      .then(res => {
        API_KEY = res
        if (res !== null) {
          resolve(true)
        } else {
          resolve(false)
        }
      })
      .catch(err => {
        onSignOut()
        reject(err)
      })
  })
}
