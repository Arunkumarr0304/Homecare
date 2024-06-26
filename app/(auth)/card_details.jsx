import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back2.svg";
import Dark_back from "../../assets/images/Dark_back2.svg";
import { AlegreyaSC_400Regular, AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { cards } from '../../components/Data/Data';
import Visa from "../../assets/images/visa.svg";
import Button from '../../components/Button/Button';
import { Link, router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Card_details = () => {
    const { theme, toggleTheme, darkMode } = useContext(ThemeContext);
    const back = () => {
        router.push('address_details');
    };
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.header}>
        <View style={styles.header_left}>
            <TouchableOpacity onPress={back}>
       {darkMode? <Dark_back /> : <Back />}
        </TouchableOpacity>
        <Text style={[styles.heading, {color: theme.heading}]}>Card Detail</Text>
        </View>
        <TouchableOpacity >
            <Text style={[styles.add, {color: theme.text2}]}>+ Add New Card</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={styles.card_container}>
        {
            cards.map((d) => (
                <TouchableOpacity style={[styles.card, {backgroundColor: d.card_bg}]} key={d.id}>
                    <Visa />
                    <Text style={styles.card_number}>{d.card_no}</Text>
                    <View style={styles.row}>
                        <View style={styles.column1}>
                            <Text style={styles.name}>{d.name}</Text>
                            <Text style={styles.holder}>card holder</Text>
                        </View>
                        <View style={styles.column2}>
                            <Text style={styles.expires}>Expires</Text>
                            <Text style={styles.date}>{d.date}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))
        }
      </ScrollView>
      <View style={styles.order_bill}>
        <View style={styles.row1}>
            <Text style={[styles.order, {color: theme.text2}]}>Order</Text>
            <Text style={[styles.order_no, {color: theme.text2}]}>28.00$</Text>
        </View>
        <View style={styles.row1}>
            <Text style={[styles.order, {color:theme.text2}]}>Delivery</Text>
            <Text style={[styles.order_no, {color: theme.text2}]}>7.20$</Text>
        </View>
        <View style={styles.row1}>
            <Text style={[styles.summary, {color: theme.text2}]}>summary</Text>
            <Text style={[styles.total, {color: theme.text2}]}>35.20$</Text>
        </View>
      </View>
      <View style={styles.button_box}>
        <Button buttonText="Pay Now" />
      </View>
    </View>
  )
}

export default Card_details;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header_left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    heading: {
        color: '#241353',
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'AlegreyaSC_700Bold',
    },
    add: {
        fontSize: 10, 
        lineHeight: 15,
        fontFamily: 'Poppins_400Regular',
        color: '#3E3E3E',
        paddingTop: 5,
    },
    card_container: {
        flexDirection: 'row',
        marginTop: 35,
    },
    card: {
        padding: 30,
        marginRight: 20,
        borderRadius: 10,
        minWidth: 280,
    },
    card_number: {
        fontSize: 24,
        lineHeight: 27,
        fontFamily: 'Poppins_400Regular',
        color: '#FFFFFF',
        marginVertical: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    column1: {
        gap: 1,
    },
    name: {
        fontSize: 13,
        lineHeight: 19,
        fontFamily: 'AlegreyaSC_400Regular',
        color: '#ffffff',
    },
    holder: {
        fontSize: 10,
        lineHeight: 15,
        fontFamily: 'Poppins_400Regular',
        color: '#ffffff',
        textTransform: 'capitalize',
    },
    expires: {
        fontSize: 10,
        lineHeight: 15,
        fontFamily: 'Poppins_400Regular',
        color: '#ffffff',
        textTransform: 'capitalize',
    },
    date: {
        fontSize: 13,
        lineHeight: 19,
        fontFamily: 'AlegreyaSC_400Regular',
        color: '#ffffff',
    },
    order_bill: {
        gap: 10,
        marginTop: 290,
    },
    row1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    order: {
        fontSize: 13,
        lineHeight: 19,
        fontFamily: 'Poppins_400Regular',
        color: '#3E3E3E',
    },
    order_no: {
        fontSize: 13,
        lineHeight: 19,
        fontFamily: 'Poppins_400Regular',
        color: '#3E3E3E',
    },
    summary: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Poppins_400Regular',
        color: '#424347',
    },
    total: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Poppins_400Regular',
        color: '#424347',
    },
    button_box: {
        marginVertical: 30,
    }
})