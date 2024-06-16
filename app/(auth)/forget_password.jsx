import { StyleSheet, Text, View, TouchableOpacity,  TextInput } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/Dark_back.svg";
import { AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import Button from '../../components/Button/Button';
import {Redirect, router} from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Forget_password = () => {
  const { theme, toggleTheme, darkMode } = useContext(ThemeContext);
  const back = () => {
    router.push('log_sign');
  };
  const OTP = () => {
    router.push('verification');
  };
  
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
       {darkMode? <Dark_back /> : <Back />}
        </TouchableOpacity>
        <Text style={[styles.heading, {color: theme.color}]}>Forgot password</Text>
      </View>
      <View style={styles.input_section}>
          <Text style={[styles.label, {color: theme.color}]}>Email</Text>
          <TextInput
            style={[styles.input]}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='Email or Phone no'
          />
          </View>
          <Text style={styles.otp}>Get a OTP Code From Email or Phone</Text>
          <View style={styles.button_box}>
            <Button buttonText="Get OTP" onPress={OTP} />
          </View>
    </View>
  )
}

export default Forget_password;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    color: '#000000',
    fontFamily: 'AlegreyaSC_700Bold',
  },
  input_section: {
    gap: 8,
    marginTop: 30,
  },
  label: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'AlegreyaSC_500Medium',
    
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  otp: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Poppins_400Regular',
    color: '#808080',
    marginVertical: 20,
  },
  button_box: {
    paddingTop: 350,
    paddingBottom: 180,
  }
})