import {View, Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import Title from '../components/Title';
import Colors from '../constants/Colors';
import PrimaryButton from '../components/PrimaryButton'

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/gameOver.png')}
        />
      </View>

      <Text style={styles.summary1}>
        Your phone needed <Text style={styles.summary}>{roundsNumber}</Text> rounds to guess
        the number <Text style={styles.summary}>{userNumber}.</Text>
      </Text>

      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary4,
    overflow: 'hidden',
    margin: 36,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  summary: {
    color: Colors.primary4,
    fontWeight: 'bold',
  },

  summary1: {
    fontWeight: '600',
    color: '#000',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 24
  },
});

export default GameOverScreen;
