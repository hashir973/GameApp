import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const GuessLogItem = ({roundNumber, guess}) => {
  return (
    <View style = {styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>

    </View>
  )
}
const styles = StyleSheet.create({
    listItem:{
        padding: 12,
        marginVertical: 8,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: Colors.primary4,
        backgroundColor: Colors.accent1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowRadius: 3,
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowColor: '#000',


    }
})
export default GuessLogItem