import { AppRegistry } from 'react-native';
import App from './src/index';

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Class RCTCxxModule', // https://github.com/facebook/react-native/issues/18201#issuecomment-390427365
])

AppRegistry.registerComponent('CiandtPeople', () => App);
