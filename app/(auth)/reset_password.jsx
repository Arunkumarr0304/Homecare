import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/Dark_back.svg";
import { AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import Button from '../../components/Button/Button';
import { Link, router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Reset = () => {
  const { theme, toggleTheme, darkMode } = useContext(ThemeContext);
  const back = () => {
    router.push('verified');
  };
  const submit = () => {
    router.push('home');
  };
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
       {darkMode? <Dark_back /> : <Back />}
        </TouchableOpacity>
        <Text style={[styles.heading, {color:theme.heading}]}>Create new password</Text>
      </View>
      <View style={styles.input_container}>
      <View style={styles.input_box}>
        <Text style={[styles.label, {color: theme.color}]}>Create New Password</Text>
        <TextInput
          style={styles.password_input}
          placeholder='Enter password'

        />
      </View>
      <View style={styles.input_box}>
        <Text style={[styles.label, {color: theme.color}]}>Confirm New Password</Text>
        <TextInput
          style={styles.password_input}
          placeholder='Re- Enter Password'
          
        />
      </View>
      </View>
      <Button buttonText="SUMBIT" onPress={submit} />
    </View>
  )
}

export default Reset;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 200,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
    },
    heading: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'AlegreyaSC_700Bold',
        color: '#000000',
    },
    input_container: {
        marginTop: 30,
        marginBottom: 250,
    },
    input_box: {
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
      password_input: {
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
        padding: 12,
      },
})