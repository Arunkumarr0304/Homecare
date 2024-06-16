import { AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import ThemeContext from '../../theme/ThemeContext';

const Button = ({ buttonText, onPress, backgroundColor, textColor, borderColor }) => {
  const { theme, toggleTheme, darkMode } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          
          backgroundColor: darkMode ? theme.darkButtonBackground : backgroundColor || '#241353',
        
          borderColor: borderColor || 'transparent', 
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: darkMode ? theme.heading2 :  textColor || '#ffffff' }]}>
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
