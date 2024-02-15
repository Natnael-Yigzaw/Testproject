import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import PhoneNumberInput from 'react-native-phone-number-input';

const SignUpPage = ({ navigation }) => {
  const [fullName,setFullName] = useState('');
  const [userName, setUserName] = useState('');
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    // Handle sign up logic here
    console.log('Signing up with:', fullName, userName, password, confirmPassword, phoneNumber);
  };

  const handleLoginRedirect = () => {
    // Navigate back to the login page
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
    <Text style={styles.logo}>Welcome!</Text>
      <PhoneNumberInput
        defaultValue={''}
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
          style={styles.input}
          placeholder="Full name"
          onChangeText={setFullName}
          value={fullName}
        />
        <TextInput
          style={styles.input}
          placeholder="UserName"
          onChangeText={setUserName}
          value={userName}
        />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={!showPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLoginRedirect}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
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
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  
  button: {
    backgroundColor: '#186A65',
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
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

export default SignUpPage;
