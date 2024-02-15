import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import PhoneNumberInput from 'react-native-phone-number-input';

const ForgetPasswordPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  

  const handleSendOtp = () => {
    // Validate phone number and navigate to OTPInputPage
    if (phoneNumber.trim() !== '') {
        navigation.navigate('OTP');
    } else {
      // Handle empty phone number
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Phone Number</Text>
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

      <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
        <Text style={styles.buttonText}>Send Code</Text>
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
  title: {
    color: '#186A65', 
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -200,
  },

  button: {
    backgroundColor: '#186A65',
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
export default ForgetPasswordPage;
