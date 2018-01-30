import React, { Component } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SearchListItem } from '../components/SearchListItem'

export class SearchListScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: `Search results`,
    }
  }

  state = { ...this.props.navigation.state.params }

  renderItem = ({item}) => (
    <SearchListItem
      item={item}
      onPress={this.onItemPress}
    />
  )

  onItemPress = (item) => {
    this.props.navigation.navigate('Profile', item)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          "{this.state.name}" returned {this.state.results.length} results
        </Text>
        <FlatList
          data={this.state.results}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    paddingBottom: 5,
  },
  header: {
    padding: 10,
    fontWeight: 'bold',
  },
})
