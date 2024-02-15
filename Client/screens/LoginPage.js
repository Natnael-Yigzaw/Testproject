import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import PhoneNumberInput from 'react-native-phone-number-input'; // Corrected import statement

const LoginPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState('US');

  const handleLogin = () => {
    // Handle login logic here
    navigation.navigate('HomePage');
  };

  const handleSignUp = () => {
    // Navigate to Signup page
    navigation.navigate('SignUp');
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    navigation.navigate('ForgetPassword');;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Equb</Text> 
      
      <PhoneNumberInput
        defaultValue={''} // Set defaultValue to an empty string
        defaultCode="ET"
        onChangeText={(text) => {
            if (text.replace(/\D/g, '').length <= 9) {
              setPhoneNumber(text.replace(/\D/g, ''));
            }
          }}
        value={phoneNumber}
        keyboardType="numeric"
        maxLength={9}
      />

      
      <TextInput
        style={styles.passwordinput}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.linkText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>
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
  logo: {
    color: '#186A65', 
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: -80,
  },
  phoneInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordinput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#186A65',
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  linkText: {
    color: '#19524E',
    fontSize: 14,
    marginTop: 10,
  },
});

export default LoginPage;
