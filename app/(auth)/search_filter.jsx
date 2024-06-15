import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Back from "../../assets/images/back2.svg";
import { AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';

const Search_filter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back />
        <Text style={styles.heading}>Search Filter</Text>
      </View>
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
    }
})