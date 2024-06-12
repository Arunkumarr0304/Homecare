import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { AlegreyaSC_500Medium } from '@expo-google-fonts/alegreya-sc';
import Drop from "../../assets/images/drop_down.svg";
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import PhoneInput from '../PhoneInput/PhoneInput';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';


const Signup = () => {
  const [formattedValue, setFormattedValue] = useState("");
  const [country, setCountry] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
        <View style={styles.input_contiainer}>
          <View style={styles.input_section}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={[styles.input1]}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={styles.name_content}>
            <Text style={styles.mr}>mr.</Text>
            <Drop />
          </View>
          </View>
          <View style={styles.input_section}>
       <Text style={styles.label}>Phone Number</Text>
       <PhoneInput
        defaultCode="US"
        defaultValue=""
        onChangeFormattedText={(text) => setFormattedValue(text)}
        onChangeCountry={(country) => setCountry(country)}
      />
      </View>
      <View style={styles.input_section}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input]}
            autoCapitalize="none"
            autoCorrect={false}
          />
          </View>
          <View style={styles.input_section}>
          <Text style={styles.label}>address</Text>
          <TextInput
            style={[styles.input]}
            autoCapitalize="none"
            autoCorrect={false}
          />
          </View>
          <View style={styles.input_section}>
          <Text style={styles.label}>Create Password</Text>
          <TextInput
            style={[styles.password_input, styles.passwordInput]}
            secureTextEntry={!passwordVisible}
            placeholder='password'
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
          >
            <FontAwesomeIcon
              icon={passwordVisible ? faEye : faEyeSlash}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.input_section}>
          <Text style={styles.label}>Re-enter Password</Text>
          <TextInput
            style={[styles.password_input, styles.passwordInput]}
            secureTextEntry={!passwordVisible1}
            placeholder='password'
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility1}
            style={styles.eyeIcon}
          >
            <FontAwesomeIcon
              icon={passwordVisible1 ? faEye : faEyeSlash}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.button_box}>
        <Button buttonText="signup" />
        </View>
    </ScrollView>
  )
}

export default Signup;

const styles = StyleSheet.create({
container: {
  paddingBottom: 50,
},
  input_contiainer: {
    marginBottom: 30,
    gap: 16,
  },
  input_section: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'AlegreyaSC_500Medium',
    
  },
  input1: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingVertical: 12,
    paddingRight: 12,
    paddingLeft: 60,
    position: 'relative',
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  name_content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    position: 'absolute',
    bottom: 11,
    left: 12,
  },
  mr: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: '#1A1B2D',
    textTransform: 'capitalize',
  },
  password_input: {
    position: 'relative',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 8,
    paddingVertical: 12,
    paddingLeft: 20,
    paddingRight: 55,
    backgroundColor: '#F5F5F5',
  },
  passwordInput: {
    paddingRight: 60,
  },
  eyeIcon: {
    position: 'absolute',
    bottom: 15,
    right: 18,
  },
  button_box: {
    marginBottom: 50,
  }
})