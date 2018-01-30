import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export class SearchListItem extends Component {
  onPress = () => {
    this.props.onPress(this.props.item);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.item}>
          <Text style={styles.item__name}>{this.props.item.name}</Text>
          <Text style={styles.item__role}>{this.props.item.role}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderColor: '#69b4e2',
    paddingBottom: 5,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  item__name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#125177',
  },
  item__role: {
    fontSize: 12,
  },
})
