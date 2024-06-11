import { AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ buttonText, onPress, backgroundColor, textColor, borderColor }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor || '#241353',
          borderColor: borderColor || 'transparent', 
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor || '#ffffff' }]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 37,
    justifyContent: 'center',
    minWidth: 200,
  },
  buttonText: {
    textTransform: 'capitalize',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    fontFamily: 'AlegreyaSC_700Bold',
  },
});

export default Button;
