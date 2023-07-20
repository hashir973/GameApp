import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

const Card = ({children}) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.primary3,
        marginTop: 36,
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5,
        alignItems: 'center',
      },
    
})

export default Card;
