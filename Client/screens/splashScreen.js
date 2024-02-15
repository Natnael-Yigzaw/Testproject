import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to the Onboarding screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 3000);

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Equb</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#186A65',
    fontSize: 46,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
