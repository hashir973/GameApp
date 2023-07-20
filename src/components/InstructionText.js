import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

const InstructionText = ({children, style}) => {
  return (
    <View>
      <Text style={[styles.text1, style]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    color: Colors.accent1,
    fontSize: 24,
  },
});

export default InstructionText;
