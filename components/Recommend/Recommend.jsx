import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, router } from "expo-router";
import { AlegreyaSC_500Medium, AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import Star from "../../assets/images/recommend_star.svg";
import Approved from "../../assets/images/approved.svg";
import { recommend_data } from '../Data/Data';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

const Recommend = () => {
    const book_now = () => {
        router.push('address_details');
    };
    const details =() => {
        router.push('provider_details');
    };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our Top Recommended</Text>
      <View style={styles.box_container}>
        {
            recommend_data.map((d) => (
                <TouchableOpacity style={styles.box} key={d.id} onPress={details}>
                    <Image source={d.image} alt='image' style={styles.profile} />
                    <TouchableOpacity style={styles.approved}>
                        <Approved />
                    </TouchableOpacity>
                    <View style={styles.box_body}>
                        <Text style={styles.box_heading}>{d.heading}</Text>
                        <Star />
                        <Text style={styles.review}>{d.review}</Text>
                        <Text style={styles.service}>{d.service}</Text>
                        <Text style={styles.price}>{d.price}</Text>
                        </View>
                        <View style={styles.button_container}>
                        <TouchableOpacity style={styles.button} onPress={book_now}>
                                <Text style={styles.button_text}>Book Now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.button_text}>Message</Text>
                            </TouchableOpacity>
                        </View>
                </TouchableOpacity>
            ))
        }
      </View>
    </View>
  )
}

export default Recommend;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 50,
    },
    heading: {
        fontSize: 16,
        lineHeight: 21,
        fontFamily: 'AlegreyaSC_700Bold',
        color: '#371B34',
    },
    box_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 45,
    },
    box: {
        borderColor: '#34275A',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 12,
        position: 'relative',
        marginTop: 55,
        maxWidth: 155,
    },
    profile: {
        width: 85,
        height: 85,
        position: 'absolute',
        top: -40,
        left: 33,
    },
    approved: {
        position: 'absolute',
        right: 4,
        top: 5,
    },
    box_body: {
        paddingTop: 45,
        paddingBottom: 12,
        alignItems: 'center',
    },
    box_heading: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'AlegreyaSC_700Bold',
        color: '#454545',
    },
    review: {
        fontSize: 9,
        lineHeight: 19,
        fontFamily: 'Poppins_400Regular',
        color: '#C7C7C7',
        marginVertical: 5,
    },
    service: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'AlegreyaSC_500Medium',
        color: '#48CFAD',
    },
    price: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Poppins_700Bold',
        color: '#241353',
        marginVertical: 5,
    },
    button_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
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
})