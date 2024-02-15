import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ResetPasswordPage = ({ navigation }) => {
  const [phoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleResetPassword = () => {
    // Reset password logic here
    console.log('Resetting password for:', phoneNumber);
  };
  const handleLoginRedirect = () => {
    // Navigate back to the login page
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="New Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={!showPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>

       <TouchableOpacity onPress={handleLoginRedirect}>
        <Text style={styles.linkText}>ooops! I rembered my password go back to login</Text>
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
    marginTop: -100,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
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
    marginTop: 50,
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

export default ResetPasswordPage;
