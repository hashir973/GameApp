import React, {useState} from 'react';
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import StartGameScreen from './src/screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import MainScreen from './src/screens/MainScreen';
import Colors from './src/constants/Colors';
import GameOverScreen from './src/screens/GameOverScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const pickNumberHandler = pickNumber => {
    setUserNumber(pickNumber);
    setGameOver(false);
  };

  const gameOverHandler = numberOfRounds => {
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = (
      <MainScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
    <StatusBar style = "dark"/>
      <LinearGradient
        colors={[Colors.primary4, Colors.accent1]}
        style={styles.rootScreen}>
        <ImageBackground
          source={require('./src/assets/images/backgroundImage.png')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}>
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.15,
  },
});

export default App;
