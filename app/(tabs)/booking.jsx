import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/back2.svg";
import Dark_Back from "../../assets/images/Dark_back2.svg";
import { AlegreyaSC_400Regular, AlegreyaSC_500Medium, AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import { booking_status, booking_tab } from '../../components/Data/Data';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import Calendar from "../../assets/images/calendar.svg";
import Call from "../../assets/images/call.svg";
import { Link, router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Booking = () => {
  const { theme, toggleTheme, darkMode } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState(booking_tab[0].id);

  const back = () => {
    router.push('home');
  };

  const safeStringifyBooking = (booking) => {
    return JSON.stringify({
      id: booking.id,
      product_name: booking.product_name,
      code: booking.code,
      timing: booking.timing,
      providername: booking.providername,
      // Add any other fields that are necessary
    });
  };

  const booking_details = (booking) => {
    const bookingString = safeStringifyBooking(booking);
    router.push({ pathname: 'booking_history', params: { booking: bookingString } });
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
        {darkMode ? <Dark_Back /> : <Back />}
        </TouchableOpacity>
        <Text style={[styles.heading, {color: theme.heading}]}>Booking</Text>
      </View>
      <View style={styles.tab_container}>
        {booking_tab.map((d) => (
          <TouchableOpacity
            style={[styles.tab, activeTab === d.id && styles.active_tab, { borderColor: theme.bordercolor}]}
            key={d.id}
            onPress={() => setActiveTab(d.id)}
          >
            <Text style={[styles.tab_text, activeTab === d.id && styles.active_tab_text, {color: theme.color}]}>
              {d.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.status_container}>
          {booking_status.map((d) => (
            <TouchableOpacity style={styles.status_box} key={d.id} onPress={() => booking_details(d)}>
              <View style={styles.status_heading}>
                <View style={styles.product_container}>
                  {d.product}
                </View>
                <View style={styles.stack_header}>
                  <Text style={[styles.pro_name, { color: '#1A1D1F' }]}>{d.product_name}</Text>
                  <Text style={styles.code}>{d.code}</Text>
                </View>
              </View>
              <View style={styles.status_header}>
                <Text style={styles.status}>status</Text>
                <Text style={styles.confirm}>confirmed</Text>
              </View>
              <View style={styles.timing_row}>
                <Calendar />
                <View style={styles.timing_column}>
                  <Text style={styles.timing}>{d.timing}</Text>
                  <Text style={styles.schedule}>Schedule</Text>
                </View>
              </View>
              <View style={styles.profile_row}>
                <View style={styles.profile_left}>
                  <Image source={d.provider} style={styles.provider} />
                  <View style={styles.provider_column}>
                    <Text style={styles.provider_name}>{d.providername}</Text>
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
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default Booking;

// Add your styles here...
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
  tab_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
    marginVertical: 30,
  },
  tab: {
    padding: 5,
    borderRadius: 5,
  },
  tab_text: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'AlegreyaSC_400Regular',
    color: '#000000',
  },
  active_tab: {
    borderBottomColor: '#241353',
    borderBottomWidth: 3,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
  },
  active_tab_text: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'AlegreyaSC_700Bold',
    color: '#241353',
  },
  status_container: {
    gap: 30,
    paddingBottom: 150,
  },
  status_box: {
    backgroundColor: '#F3EFFF',
    padding: 10,
    borderRadius: 5,
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
});
