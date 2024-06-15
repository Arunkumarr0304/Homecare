import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Back from "../../assets/images/back2.svg";
import Category from "../../assets/images/cate_details.png";
import Slider from '@react-native-community/slider';
import CustomCalendar from '../../components/Custom_calendar/Custom_Calendar';
import Mark from "../../assets/images/mark.svg";
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Reviews, available_time } from '../../components/Data/Data';
import Like from "../../assets/images/like.svg";
import Comment from "../../assets/images/comment.svg";
import Share from "../../assets/images/share.svg";
import Up from "../../assets/images/drop_up.svg";
import Button from '../../components/Button/Button';
import {Redirect, router} from "expo-router";

const Cate_details = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSliderChange = (value) => {
    setSliderValue(value);
    console.log('Slider value changed:', value);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    console.log('Selected time:', time);
  };

  const book_now = () => {
    router.push('address_details');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back />
        <Text style={styles.heading}>Home Cleaning</Text>
      </View>
      <ScrollView style={styles.scrolls} showsVerticalScrollIndicator={false}>
        <Image source={Category} alt='image' style={styles.image} />
        <Text style={styles.title}>Description</Text>
        <Text style={styles.description}>
          Lorem ipsum is a placeholder text commonly used to demonstrate the visual. Lorem ipsum is a placeholder text commonly used to demonstrate the visual. Lorem ipsum is a placeholder text commonly used to demonstrate the visuaplaceholder text commonly used to demonstrate the viplaceholder text commonly used to demonstrate the visual. Lorem ipsum is a placeholder text commonly used to demonstrate the visual. placeholder text commonly used to demonstrate the visual. Lorem ipsum is a placeholder text commonly used to demonstrate the visual. placeholder text commonly used to demonstrate the visual.
        </Text>

        <Text style={styles.title2}>Home Size</Text>
        <View style={styles.frequencyContainer}>
          <Slider
            style={styles.slider}
            minimumValue={10}
            maximumValue={3000}
            value={sliderValue}
            onValueChange={handleSliderChange}
            minimumTrackTintColor="#241353"
            maximumTrackTintColor="#ddd"
            thumbTintColor="blue"
          />
          <Text style={styles.label}>{Math.round(sliderValue)} sqft</Text>
        </View>

        <Text style={styles.title2}>Select the date</Text>
        <CustomCalendar />

        <Text style={styles.title2}>Available Time</Text>
        <View style={styles.time_header}>
          <Text style={styles.available_text}>Morning</Text>
          <Mark />
        </View>
        <ScrollView horizontal={true} style={styles.timing_container}>
          {available_time.map((time) => (
            <TouchableOpacity
              key={time.id}
              style={[
                styles.time_box,
                selectedTime === time.time && styles.activeTimeBox,
              ]}
              onPress={() => handleTimeSelect(time.time)}
            >
              <Text style={[styles.time, selectedTime === time.time && styles.activeTimeText]}>
                {time.time}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.title2}>Reviews</Text>
        <View style={styles.reviews_container}>
            {
                Reviews.map((d) => (
                    <View style={styles.review_box} key={d.id}>
                    <Image source={d.reviewer} alt='image' style={styles.images} />
                    <View style={styles.box_right}>
                    <View style={styles.timing_row}>
                        <Text style={styles.name}>{d.name}</Text>
                        <Text style={styles.review_time}>{d.timing}</Text>
                    </View>
                    <Text style={styles.review}>{d.review}</Text>
                    <View style={styles.bottom_row}>
                    <View style={styles.like_row}>
                    <Like />
                    <Text style={styles.likes}>{d.likes}</Text>
                    </View>
                    <View style={styles.comment_row}>
                    <Comment />
                    <Text style={styles.comments}>{d.comment}</Text>
                    </View>
                    <Share />
                    </View>
                    </View>
                    </View>
                ))
            }
        </View>
        <View style={styles.total_bill}>
            <View style={styles.total_row}>
                <Text style={styles.total}>Total:</Text>
                <Text style={styles.value}>  USD 150.50</Text>
            </View>
            <View style={styles.bill_row}>
                <Text style={styles.bill}>Bill Details</Text>
                <Up />
            </View>
        </View>
        <View style={styles.button_row}>
            <Button buttonText='Save Draft' backgroundColor="#ffffff" textColor="#000000" borderColor="#DDDDDD" />
            <Button buttonText='Book Now' onPress={book_now} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
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
    color: '#241353',
  },
  scrolls: {
    marginBottom: 10,
  },
  image: {
    maxWidth: 320,
    minWidth: 320,
    maxHeight: 170,
    minHeight: 170,
    borderRadius: 5,
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: 'AlegreyaSC_700Bold',
    color: '#000000',
  },
  description: {
    fontSize: 9,
    lineHeight: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#474747',
    marginTop: 10,
  },
  title2: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: 'AlegreyaSC_500Medium',
    color: '#000000',
    marginTop: 30,
    marginBottom: 20,
  },
  frequencyContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'Poppins_400Regular',
    color: '#000000',
  },
  time_header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  available_text: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Poppins_400Regular',
    color: '#241353',
    textTransform: 'capitalize',
  },
  timing_container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  time_box: {
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  time: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins_500Medium',
    color: '#6D6D6D',
  },
  activeTimeBox: {
    backgroundColor: '#241353',
  },
  activeTimeText: {
    color: '#ffffff',
  },
  reviews_container: {
    gap: 10,
  },
  review_box: {
    flexDirection: 'row',
    gap: 17,
  },
  images: {
    width: 35,
    height: 35,
  },
  box_right: {

  },
  timing_row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  name: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Poppins_500Medium',
    color: '#241353',
  },
  review_time: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins_400Regular',
    color: '#000000',
  },
  review: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Poppins_400Regular',
    color: '#474747',
    marginTop: 7,
    maxWidth: 250,
  },
  bottom_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  like_row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: 3,
  },
  likes: {
    fontSize: 13,
    lineHeight: 20,
    color: '#000000',
    alignItems: 'flex-end',
  },
  comment_row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  total_bill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  total_row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    
},
  total: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Poppins_700Bold',
    color: '#241353',
  },
  value: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#000000',
  },
  bill_row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  bill: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Poppins_500Medium',
    color: '#241353',
  },
  button_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
    marginBottom: 80,
  }
});

export default Cate_details;
