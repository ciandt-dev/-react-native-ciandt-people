import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

export const SearchInput = (props) => {
  return (
    <View>
      <TextInput
        style={styles.search_inpput}
        {...props}
      />
      <View style={styles.search_tip}>
        <Text style={styles.search_tip__title}>
          Search tips:
        </Text>
        <Text style={styles.search_tip__text}>
          If you aren't sure about an employee name, add a ~{`\n`}
          at the end of the search term. For example: <Text style={{fontWeight: 'bold'}}>ivan~</Text>
        </Text>
        <Text style={styles.search_tip__text}>
          To find all Scrum Masters from Campinas,{`\n`}
          type <Text style={{fontWeight: 'bold'}}>scrum master cps</Text>
        </Text>
        <Text style={styles.search_tip__text}>
          To find all employees from Belo Horizonte,{`\n`}
          type <Text style={{fontWeight: 'bold'}}>bh</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  search_inpput: {
    height: 42,
    width: 320,
    borderColor: '#DCDFE3',
    borderWidth: 2,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  search_tip: {
    padding: 10,
  },
  search_tip__title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  search_tip__text: {
    fontSize: 12,
    flexDirection: 'row',
    marginBottom: 20,
  },
})
