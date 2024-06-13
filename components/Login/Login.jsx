import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AlegreyaSC_500Medium, AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import { Link, router } from "expo-router";
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import Button from '../Button/Button';
import { log_tabs, tab } from '../Data/Data';
import PhoneInput from '../PhoneInput/PhoneInput';

const Login = () => {
  const login = () => {
    router.push('home');
  };
  const [formattedValue, setFormattedValue] = useState("");
  const [country, setCountry] = useState(null);

  return (
    <View style={styles.container}>
       
       <View style={styles.phone_box}>
       <Text style={styles.label}>Phone Number</Text>
       <PhoneInput
        defaultCode="US"
        defaultValue=""
        onChangeFormattedText={(text) => setFormattedValue(text)}
        onChangeCountry={(country) => setCountry(country)}
      />
      </View>
      <View style={styles.phone_box}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.password_input}
          placeholder='Enter password'
        />
      </View>
      <Link href='/forget_password' style={styles.forget}>Forgot password ?</Link>
      <Button buttonText="Login" onPress={login} />
      <Text style={styles.or}>Or</Text>
      <Text style={styles.with}>Sign in with</Text>
      <View style={styles.tab_container}>
        {
          log_tabs.map((d) => (
            <TouchableOpacity style={styles.tab} key={d.id}>
                {d.icon}
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  phone_box: {
    gap: 5,
    marginTop: 15,
  },
  label: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'AlegreyaSC_500Medium',
    color: '#000000',
    textTransform: 'capitalize',
  },
  phoneInputContainer: {
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    width: '100%',
  },
  phoneInputTextContainer: {
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    width: '100%',
  },
  phoneInputTextInput: {
    padding: 0,
  },
  password_input: {
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    padding: 12,
  },
  forget: {
    fontSize: 11,
    lineHeight: 14,
    fontFamily: 'Poppins_400Regular',
    textTransform: 'capitalize',
    color: '#241353',
    marginTop: 8,
    marginBottom: 170,
  },
  or: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'AlegreyaSC_700Bold',
    color: '#000000',
    marginTop: 33,
    textAlign: 'center',
  },
  with: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'AlegreyaSC_500Medium',
    color: '#1A1B2D',
  },
  tab_container: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
    gap: 35,
    marginTop: 15,
  },
  tab: {
    borderWidth: 2,
    borderColor: '#FFC19B',
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#FCFCFC',
  }
});
