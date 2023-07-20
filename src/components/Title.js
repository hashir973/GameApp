import {StyleSheet, Text} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    borderWidth: 2,
    padding: 12,
    borderColor: Colors.accent1,
  },
});

export default Title;
