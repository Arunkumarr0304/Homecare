import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { AlegreyaSC_400Regular, AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import Stars from "../../assets/images/stars.svg";
import Call from "../../assets/images/call.svg";
import { our_service, our_service_tab, tab } from '../Data/Data';
import Button from '../Button/Button';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';


const Services = () => {
  return (
    <View style={styles.service_section}>
      <Text style={styles.heading}>Our Services</Text>
      <ScrollView horizontal={true} style={styles.service_tab_container}>
        {
            our_service_tab.map((d) => (
                <View style={styles.tab} key={d.id}>
                 <Text style={styles.tab_text}>{d.text}</Text>
                </View>
            ))
        }
      </ScrollView>
      <View style={styles.sevice_card_container}>
        {
            our_service.map((d) => (
                <View style={styles.card} key={d.id}>
                    <Image source={d.image} alt='image' />
                    <View style={styles.card_body}>
                        <View style={styles.card_review}>
                            <Stars />
                            <Text style={styles.reviews}>{d.review}</Text>
                        </View>
                        <Text style={styles.card_heading}>{d.heading}</Text>
                        <Text style={styles.description}>{d.description}</Text>
                        <View style={styles.button_container}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.button_text}>Book Now</Text>
                            </TouchableOpacity>
                            <View style={styles.second_button}>
                            <TouchableOpacity style={styles.call}> 
                            <Call />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.button_text}>call Now</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            ))
        }
      </View>
    </View>
  )
}

export default Services;

const styles = StyleSheet.create({
    service_section: {
        marginTop: 30,
    },
    heading: {
        fontSize: 16,
        lineHeight: 21,
        fontFamily: 'AlegreyaSC_700Bold',
        color: '#000000',
    },
    service_tab_container: {
        flexDirection: 'row',
        marginTop: 15,
    },
    tab: {
        marginRight: 15,
    },
    sevice_card_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
        marginTop: 24,
    },
    card: {
        maxWidth: 150,
        borderRadius: 5,
    },
    card_body: {
        borderWidth: 1,
        borderBottomColor: '#34275A',
        borderLeftColor: '#34275A',
        borderRightColor: '#34275A',
        borderTopColor: 'transparent',
        paddingHorizontal: 4,
        paddingVertical: 10,
        gap: 5,
        
    },
    card_review: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    reviews: {
        fontSize: 8,
        lineHeight: 12,
        fontFamily: 'Poppins_400Regular',
        color: '#000000',
    },
    card_heading: {
        fontSize: 12,
        lineHeight: 20,
        fontFamily: 'AlegreyaSC_700Bold',
        color: '#000000',
    },
    description: {
        fontSize: 10,
        lineHeight: 16,
        fontFamily: 'Poppins_400Regular',
        color: '#474747',
    },
    button_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#241353',
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 65,
    },
    button_text: {
        fontSize: 9,
        lineHeight: 20,
        fontFamily: 'AlegreyaSC_400Regular',
        color: '#FFFFFF',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    second_button: {
        position: 'relative',
    },
    call: {
        position: "absolute",
        bottom: 8,
        left: 3,
        zIndex: 100,
        
    },
    tab_text: {
        fontSize: 14,
        lineHeight: 19,
        fontFamily: 'AlegreyaSC_400Regular',
        color: '#000000',
    }
})