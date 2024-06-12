import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Verify from "../../assets/images/verified.webp";
import Back from "../../assets/images/back.svg";
import { AlegreyaSC_800ExtraBold } from '@expo-google-fonts/alegreya-sc';
import Button from '../../components/Button/Button';
import { Link, router } from "expo-router";

const Verified = () => {
  const reset = () => {
    router.push('reset_password');
  };
  return (
    <View style={styles.main_container}>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.back}>
          <Back width={30} height={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.image_box}>
        <Image 
          source={Verify}  
          style={styles.image} 
        />
      </View>
      <Text style={styles.success}>Otp Vervified Successfully</Text>
      
    </View>
    <Button buttonText="reset password" onPress={reset} />
    </View>
  )
}

export default Verified;

const styles = StyleSheet.create({
  main_container: {
    paddingTop: 10,
    paddingBottom: 200,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  container: {
    alignItems: 'center', 
    marginBottom: 20,
  },
  header: {
    position: 'absolute',
    top: 60,
    left: 20,
  },
  back: {
    width: 30,
    height: 30,
  },
  image_box: {
    marginTop: 120, 
    maxWidth: 260,
    maxHeight: 260,
  },
  image: {
    width: 260, 
    height: 260, 
    resizeMode: 'contain', 
  },
  success: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'AlegreyaSC_800ExtraBold',
    marginBottom: 130,
  }
});
