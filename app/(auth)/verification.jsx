import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useRef, useEffect, useContext } from 'react';
import Back from "../../assets/images/back.svg";
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import Button from '../../components/Button/Button';
import { Link, router } from "expo-router";

const Verification = () => {

  const verify = () => {
    router.push('verified');
  };

  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(110);
  const otpInputs = useRef([]);
  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== '' && index < otp.length - 1) {
      otpInputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index, event) => {
    if (event.nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];
      if (otp[index] !== '') {
        newOtp[index] = '';
        setOtp(newOtp);
        return;
      }
      if (index > 0) {
        newOtp[index - 1] = '';
        setOtp(newOtp);
        otpInputs.current[index - 1].focus();
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [timer]);

  // Format the timer value into minutes:seconds
  const formatTimer = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Back />
        </TouchableOpacity>
        <Text style={styles.heading}>Verfication Code</Text>
      </View>
      <Text style={styles.verify_text}>We just send you a verify code. Check your inbox to get them.</Text>
      <View style={styles.name_input}>

        <View style={styles.otp_block}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(value) => handleOtpChange(index, value)}
              onKeyPress={(event) => handleBackspace(index, event)}
              value={digit}
              ref={(ref) => otpInputs.current[index] = ref}
            />
          ))}
        </View>
      </View>
      <Button buttonText="SUMBIT OTP" onPress={verify} />
      <View style={styles.resend_timer}>
        <Text style={styles.resend}>Re-send code in</Text>
        <View style={styles.timer_container}>
          <Text style={styles.timer}>{formatTimer(timer)}</Text>
        </View>
      </View>
    </View>
  )
}

export default Verification;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 350,
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
  verify_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Poppins_400Regular',
    color: '#808080',
    paddingTop: 20,
  },
  name_input: {
    marginTop: 30,
    marginBottom: 50,
  },
  otp_block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginTop: 50,
  },
  input: {
    backgroundColor: '#EFEFEF',
    borderWidth: 1,
    borderRadius: 12,
    width: 60,
    height: 50,
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 30,
    color: '#000000',
    fontWeight: '700',
    borderColor: 'transparent',
  },
  resend_timer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  resend: {
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '400',
    color: '#4C4C4C',
  },
  timer_container: {
    borderWidth: 1,
    borderRadius: 10,
    width: 70,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
  },
  timer: {
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '400',
    color: '#4C4C4C',
  },

})