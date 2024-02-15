import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate('Login');
  };

  const handleSkip = () => {
    navigation.navigate('Login');
  };

  const NextButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={[styles.button ]} {...props}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    );
  };

  const SkipButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={[styles.button]} {...props}>
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
    );
  };

  const DoneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={[styles.button]} {...props}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleSkip}
        NextButtonComponent={NextButton}
        SkipButtonComponent={SkipButton}
        DoneButtonComponent={DoneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <LottieView
                style={styles.lottie}
                source={require('../assets/animations/DE.json')}
                autoPlay
                loop
              />
            ),
            title: 'Where could I join Equbs',
            subtitle: 'Have you ever asked this question?',
            titleStyles: {color: '#186A65',fontWeight: 'bold'},
            subTitleStyles: {color: '#186A65',},
          },
          {
            backgroundColor: '#fff',
            image: (
              <LottieView
                style={styles.lottie}
                source={require('../assets/animations/JU.json')}
                autoPlay
                loop
              />
            ),
            title: 'Equb',
            subtitle: "That's why we are here for.",
            titleStyles: {color: '#186A65',fontWeight: 'bold'},
            subTitleStyles: {color: '#186A65',},
          },
          {
            backgroundColor: '#fff',
            image: (
              <LottieView
                style={styles.lottie}
                source={require('../assets/animations/VC.json')}
                autoPlay
                loop
              />
            ),
            title: 'Welcome',
            subtitle: 'Start your journey today and be successful.',
            titleStyles: {color: '#186A65',fontWeight: 'bold'},
            subTitleStyles: {color: '#186A65',},
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lottie: {
    width: 300,
    height: 400,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    margin:5
  },
  buttonText: {
    color: '#186A65',
    fontSize: 16,
  },
});

export default OnboardingScreen;
