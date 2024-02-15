import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const OTPInputPage = ({ navigation }) => {
  
  const [otp, setOtp] = useState('');
  

  const handleContinue = () => {
    // Send OTP logic here
    /*if (otp.trim() !== '') {*/
      navigation.navigate('ResetPassword');
 /* } else {
    // Handle empty phone number
  }*/
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Enter  your One Time Password(OTP)</Text>
    
      <TextInput
        style={styles.input}
        placeholder="OTP"
        onChangeText={setOtp}
        value={otp}
        keyboardType="numeric"
      />
     <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>continue</Text>
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
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 40,
    marginTop: -200,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
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
    color: 'blue',
    fontSize: 14,
    marginTop: 10,
  },

});

export default OTPInputPage;
