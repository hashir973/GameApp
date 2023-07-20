import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

const PrimaryButton = ({children, onPress}) => {
  return (
    <View style={style.buttonOuterContainer}>
      <Pressable
        android_ripple={{color: Colors.primary2}}
        onPress={onPress}
        style={style.buttonInnerContainer}>
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },

  buttonInnerContainer: {
    backgroundColor: Colors.primary1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default PrimaryButton;
