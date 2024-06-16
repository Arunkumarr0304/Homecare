import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/back2.svg";
import Dark_back from "../../assets/images/Dark_back2.svg";
import { AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import { Experience, available, filter_rating, filter_rating2, services } from '../../components/Data/Data';
import { Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import Tick from "../../assets/images/tick.svg";
import Star from "../../assets/images/Star.svg";
import Slider from '@react-native-community/slider';
import Button from '../../components/Button/Button';
import { Link, router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Search_filter = () => {
  const { theme, toggleTheme, darkMode } = useContext(ThemeContext);
  const [selectedService, setSelectedService] = useState(services[0].id);
  const [selectedService2, setSelectedService2] = useState(Experience[0].id);
  const [selectedAvailability, setSelectedAvailability] = useState(available[0].id);
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderValue2, setSliderValue2] = useState(0);
  
const filter = () => {
  router.push('services');
};
const back = () => {
  router.push('services');
};
  const handleSliderChange = (value) => {
    setSliderValue(value);
    console.log('Slider value changed:', value);
  };

  const handleSliderChange2 = (value) => {
    setSliderValue2(value);
    console.log('Slider value changed:', value);
  };
 
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
       {darkMode? <Dark_back /> : <Back />}
        </TouchableOpacity>
        <Text style={[styles.heading, {color: theme.heading}]}>Search Filter</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
      <Text style={[styles.title, {color: theme.color}]}>Services</Text>
      <View style={styles.services_container}>
        {
          services.map((d) => (
            <TouchableOpacity
              style={[
                styles.stack,
                selectedService === d.id && [styles.selected_stack, {backgroundColor: theme.heading}]
              ]}
              key={d.id}
              onPress={() => setSelectedService(d.id)}
            >
              <Text style={[
                styles.stack_text,
                selectedService === d.id && [styles.selected_stack_text, {color: theme.background}]
              ]}>
                {d.text}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <Text style={[styles.title, {color: theme.color}]}>Availability</Text>
      <View style={styles.available_container}>
        {
          available.map((d) => (
            <TouchableOpacity
              style={[
                styles.available_stack,
                selectedAvailability === d.id && [styles.selected_stack, {backgroundColor: theme.heading}]
              ]}
              key={d.id}
              onPress={() => setSelectedAvailability(d.id)}
            >
              <Tick />
              <Text style={[
                styles.stack_text,
                selectedAvailability === d.id && [styles.selected_stack_text, {color: theme.background}]
              ]}>
                {d.text}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <Text style={[styles.title, {color: theme.color}]}>Experience Level</Text>
      <View style={styles.services_container}>
        {
          Experience.map((d) => (
            <TouchableOpacity
              style={[
                styles.stack,
                selectedService2 === d.id && [styles.selected_stack, {backgroundColor: theme.heading}]
              ]}
              key={d.id}
              onPress={() => setSelectedService2(d.id)}
            >
              <Text style={[
                styles.stack_text,
                selectedService2 === d.id && [styles.selected_stack_text, {color: theme.background}]
              ]}>
                {d.text}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <Text style={[styles.title, {color: theme.color}]}>Rating</Text>
      <View style={styles.rating_container}>
        {
          filter_rating.map((d) => (
            <View style={styles.rating_row} key={d.id}>
              <Star />
              <Text style={[styles.rating, {color: theme.heading}]}>{d.rating}</Text>
            </View>
          ))
        }
      </View>
      <Slider
            style={styles.slider}
            minimumValue={10}
            maximumValue={3000}
            value={sliderValue}
            onValueChange={handleSliderChange}
            minimumTrackTintColor="blue"
            maximumTrackTintColor="#ddd"
            thumbTintColor="blue"
          />

<Text style={[styles.title, {color: theme.color}]}>Pricing</Text>
      <View style={styles.rating_container}>
        {
          filter_rating2.map((d) => (
            <View style={styles.rating_row} key={d.id}>
              
              <Text style={[styles.rating, {color: theme.heading}]}>{d.rating}</Text>
            </View>
          ))
        }
      </View>
      <Slider
            style={styles.slider}
            minimumValue={10}
            maximumValue={3000}
            value={sliderValue2}
            onValueChange={handleSliderChange2}
            minimumTrackTintColor="blue"
            maximumTrackTintColor="#ddd"
            thumbTintColor="blue"
          />
          <View style={styles.button_box}>
          <Button buttonText="Apply Filter" onPress={filter} />
          </View>
          </ScrollView>
    </View>
  )
}

export default Search_filter;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 50,
    },
    heading: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'AlegreyaSC_700Bold', 
        color: '#241353',
    },
    title: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'Poppins_600SemiBold', 
      color: '#000000',
      marginTop: 30,
      marginBottom: 8,
      textTransform: 'capitalize',
    },
    services_container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
    },
    stack: {
      borderColor: '#D4E0EB',
      borderRadius: 6,
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: '#D4E0EB',
    },
    stack_text: {
      fontSize: 12,
      lineHeight: 18,
      fontFamily: 'Poppins_500Medium',
      color: '#241353',
      textTransform: 'capitalize',
    },
    available_container: {
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'space-between',
    },
    available_stack: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      minWidth: 150,
      backgroundColor: '#D4E0EB',
      borderColor: '#D4E0EB',
      borderRadius: 6,
      paddingVertical: 8,
      paddingHorizontal: 15,
    },
    selected_stack: {
      backgroundColor: '#241353',  
      borderColor: '#241353',
    },
    selected_stack_text: {
      color: '#FFFFFF',  // Change text color for selected state
    },
    rating_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    rating_row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    rating: {
      fontSize: 12,
      lineHeight: 18,
      fontWeight: '500',
      color: '#241353',
    },
    button_box: {
      marginVertical: 50,
    }
})
