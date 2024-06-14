import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Back from "../../assets/images/back2.svg";
import { useRouter, useLocalSearchParams } from "expo-router";
import Calendar from "../../assets/images/calendar.svg";
import Call from "../../assets/images/call.svg";
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { AlegreyaSC_400Regular, AlegreyaSC_500Medium, AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import { booking_status } from '../../components/Data/Data';
import Product1 from "../../assets/images/product_img3.svg";
import Provider1 from "../../assets/images/provider1.png";
import Recommend from '../../components/Recommend/Recommend';


const Booking_History = () => {
  const { booking } = useLocalSearchParams();
  const bookingDetails = booking ? JSON.parse(booking) : null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back />
        <Text style={styles.heading}>Booking History</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      {bookingDetails && (
        <View style={styles.status_box}>
          <View style={styles.status_heading}>
            <View style={styles.product_container}>
              <Product1 />
            </View>
            <View style={styles.stack_header}>
              <Text style={[styles.pro_name, { color: '#1A1D1F' }]}>{bookingDetails.product_name}</Text>
              <Text style={styles.code}>{bookingDetails.code}</Text>
            </View>
          </View>
          <View style={styles.status_header}>
            <Text style={styles.status}>status</Text>
            <Text style={styles.confirm}>confirmed</Text>
          </View>
          <View style={styles.timing_row}>
            <Calendar />
            <View style={styles.timing_column}>
              <Text style={styles.timing}>{bookingDetails.timing}</Text>
              <Text style={styles.schedule}>Schedule</Text>
            </View>
          </View>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.use}>Use Good Items for Uses</Text>
          <View style={styles.profile_row}>
            <View style={styles.profile_left}>
              <Image source={Provider1} style={styles.provider} />
              <View style={styles.provider_column}>
                <Text style={styles.provider_name}>{bookingDetails.providername}</Text>
                <Text style={styles.work}>service provider</Text>
              </View>
            </View>
            <View style={styles.second_button}>
              <TouchableOpacity style={styles.call}>
                <Call />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.button_text}>call</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
       <Recommend />
       </ScrollView>
    </View>
  );
}

export default Booking_History;

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
    color: '#241353',
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'AlegreyaSC_700Bold',
  },
  // (additional styles for the status box)
  status_box: {
        marginTop: 30,
  },
  status_heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 2,
    width: '90%',
    paddingBottom: 10,
  },
  product_container: {
    backgroundColor: '#241353',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 50,
    minHeight: 50,
  },
  stack_header: {
    flexDirection: 'column',
    gap: 3,
  },
  pro_name: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'AlegreyaSC_700Bold',
  },
  code: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'Poppins_400Regular',
    color: '#6F767E',
  },
  status_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 3,
  },
  status: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'AlegreyaSC_700Bold',
    color: '#000000',
  },
  confirm: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'Poppins_400Regular',
    color: '#7FC09C',
    backgroundColor: '#ECF8F1',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 3,
  },
  timing_row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  timing_column: {
    gap: 5,
  },
  timing: {
    fontSize: 12,
    lineHeight: 17,
    fontFamily: 'Poppins_600SemiBold',
    color: '#1A1D1F',
  },
  schedule: {
    fontSize: 12,
    lineHeight: 17,
    fontFamily: 'Poppins_600SemiBold',
    color: '#6F767E',
  },
  profile_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  profile_left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  provider: {
    width: 40,
    height: 40,
  },
  provider_column: {
    gap: 5,
  },
  provider_name: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'AlegreyaSC_500Medium',
    color: '#1A1D1F',
  },
  work: {
    fontSize: 12,
    lineHeight: 17,
    fontFamily: 'Poppins_500Medium',
    color: '#6F767E',
  },
  second_button: {
    position: 'relative',
  },
  call: {
    position: "absolute",
    bottom: 8,
    left: 6,
    zIndex: 100,
  },
  button: {
    backgroundColor: '#241353',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 65,
  },
  button_text: {
    fontSize: 11,
    lineHeight: 20,
    fontFamily: 'AlegreyaSC_400Regular',
    color: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  description: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'AlegreyaSC_700Bold',
    color: '#000000',
    marginTop: 20,
  },
  use: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'Poppins_400Regular',
    color: '#1A1D1F',
    marginBottom: 20,
  }
});
