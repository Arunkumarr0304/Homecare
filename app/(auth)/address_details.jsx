import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/back2.svg";
import Dark_back from "../../assets/images/Dark_back2.svg";
import CheckCircle from '../../components/Check_Circle/Check_Circle';
import { AlegreyaSC_400Regular, AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import Button from '../../components/Button/Button';
import { Link, router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Address_details = () => {
  const { theme, toggleTheme, darkMode } = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);

  const handlePress = () => {
    setChecked(!checked);
  };
  const handlePress1 = () => {
    setChecked1(!checked1);
  };

  const next = () => {
      router.push('card_details');
  };

  const back = () => {
    router.push('home');
  };  

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
       {darkMode? <Dark_back /> : <Back />}
        </TouchableOpacity>
        <Text style={[styles.heading, {color: theme.heading}]}>Address Detail</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.head_row}>
          <Text style={[styles.address_heading, {color: theme.heading}]}>Enter your location address</Text>
          <CheckCircle size={24} color="#241353" checked={checked} onPress={handlePress} />
        </View>
        <View style={styles.input_container}>
          <View style={styles.input_box}>
            <Text style={[styles.label, {color: theme.color}]}>House number</Text>
            <TextInput style={[styles.input, {color: theme.color}]}
              placeholder='Enter house number'
              placeholderTextColor={theme.color}
              keyboardType='numbers-and-punctuation' />
          </View>
          <View style={styles.input_box}>
            <Text style={[styles.label, {color: theme.color}]}>Street number</Text>
            <TextInput style={[styles.input, {color: theme.color}]}
              placeholder='Enter street number'
              placeholderTextColor={theme.color}
              keyboardType="numeric" />
          </View>
          <View style={styles.input_box}>
            <Text style={[styles.label, {color: theme.color}]}>Complete Address</Text>
            <TextInput style={[styles.input, {color: theme.color}]}
              placeholder='Enter address'
              placeholderTextColor={theme.color}
              keyboardType='numbers-and-punctuation' />
          </View>
          <View style={styles.input_box}>
            <Text style={[styles.label, {color: theme.color}]}>Choose Landmark</Text>
            <TextInput style={[styles.input, {color: theme.color}]}
              placeholder='Enter landmark'
              placeholderTextColor={theme.color}
              keyboardType='numbers-and-punctuation' />
          </View>
          <View style={styles.input_box}>
            <Text style={[styles.label, {color: theme.color}]}>Provide Specific Instructions or Details</Text>
            <TextInput
              style={[styles.input, { textAlignVertical: 'top', color: theme.color }]}
              placeholder='Write here...'
              keyboardType='numbers-and-punctuation'
              placeholderTextColor={theme.color}
              multiline={true}
              numberOfLines={5}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.address_box}>
          <Text style={[styles.address, {color: theme.text2}]}>202 Wayne St, Durand, MI, 48429 202 Wayne St, Durand, MI, 48429</Text>
          <CheckCircle size={24} color="#241353" checked={checked1} onPress={handlePress1} />
        </TouchableOpacity>
        <View style={styles.button_box}>
          <Button buttonText="next" onPress={next} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Address_details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
  },
  heading: {
    color: '#241353',
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'AlegreyaSC_700Bold',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  head_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  address_heading: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'AlegreyaSC_700Bold',
    color: '#241353',
  },
  input_container: {
    gap: 20,
  },
  input_box: {
    gap: 10,
  },
  label: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'AlegreyaSC_700Bold',
    color: '#000000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CACACA',
    padding: 16,
    borderRadius: 6,
  },
  address_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#241353',
  },
  address: {
    fontSize: 13,
    lineHeight: 18,
    fontFamily: 'AlegreyaSC_400Regular',
    color: '#3E3E3E',
    maxWidth: 185,
  },
  button_box: {
    marginVertical: 30,
    paddingBottom: 30,
  }
});
