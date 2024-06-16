import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Mark from "../../assets/images/mark.svg";
import ThemeContext from '../../theme/ThemeContext';

const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateText, setSelectedDateText] = useState(null);

  // Function to get dates of the current week
  const getCurrentWeekDates = () => {
    let currentDate = new Date(); // Current date
    let weekStart = currentDate.getDate() - currentDate.getDay(); // First day of current week
    let dates = [];

    for (let i = 0; i < 7; i++) {
      let newDate = new Date(currentDate.setDate(weekStart + i));
      dates.push(newDate);
    }

    return dates;
  };

  // Format date to 'Day' (e.g., 'Sun')
  const formatDay = (date) => {
    const options = { weekday: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  // Handle date selection
  const handleDatePress = (date) => {
    setSelectedDate(date);
    setSelectedDateText(formatDate(date)); // Set selected date text
    console.log('Selected date:', date);
  };

  // Format date to 'Month Day' (e.g., 'June 12')
  const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Get current week's dates
  const weekDates = getCurrentWeekDates();

  // Current month and year
  const currentMonth = weekDates[0].toLocaleDateString('en-US', { month: 'long' });
  const currentYear = weekDates[0].getFullYear();
  const { theme, toggleTheme, darkMode } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{currentMonth} {currentYear}</Text>
        <Mark />
      </View>
      <View style={styles.weekContainer}>
        {weekDates.map((date, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayText}>{formatDay(date)}</Text>
            <TouchableOpacity
              style={[
                styles.dateButton,
                selectedDate && selectedDate.toDateString() === date.toDateString() && [styles.selectedDate, {backgroundColor: theme.heading}],
              ]}
              onPress={() => handleDatePress(date)}
            >
              <Text style={[styles.dateText, selectedDate && selectedDate.toDateString() === date.toDateString() && [styles.selectedDateText, {color: theme.background}]]}>{date.getDate()}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      {/* {selectedDateText && (
        <View style={styles.selectedDateContainer}>
          <Text style={styles.selectedDateText}>Selected Date: {selectedDateText}</Text>
        </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  headerText: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: 'Poppins_400Regular', 
    color: '#241353',
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  dayContainer: {
    alignItems: 'center',
  },
  dayText: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins_500Medium',
    color: '#6D6D6D',
    
  },
  dateButton: {
    marginTop: 5,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  selectedDate: {
    backgroundColor: '#241353',
    color: '#ffffff',
  },
  selectedDateText: {
    fontSize: 12, 
    lineHeight: 18,
    fontFamily: 'Poppins_700Bold',
    color: '#ffffff',
  },
  dateText: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins_500Medium',
    color: '#6D6D6D',
  },
  selectedDateContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default CustomCalendar;
