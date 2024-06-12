import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AlegreyaSC_400Regular, AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import Button from '../../components/Button/Button';
import { method } from '../../components/Data/Data';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Link, router } from "expo-router";
import Method from "../../assets/images/method.webp";
import Location from "../../assets/images/location.svg";
import Command from "../../assets/images/command.svg";
import Profile1 from "../../assets/images/profile1.png";
import Profile2 from "../../assets/images/profile2.png";
import Profile3 from "../../assets/images/profile3.png";
import Profile4 from "../../assets/images/profile4.png";
import Profile5 from "../../assets/images/profile5.png";
import Profile6 from "../../assets/images/profile6.png";
import Profile7 from "../../assets/images/profile7.png";


const Log_method = () => {
  return (
    <View style={styles.container}>
        <View style={styles.image_container}>
        <Image source={Method} alt='image' style={styles.image1} />
        <View style={styles.location}>
            <Location />
        </View>
        <View style={styles.command}>
            <Command />
        </View>
        <Image source={Profile1} alt='image' style={styles.profile1} />
        <Image source={Profile2} alt='image' style={styles.profile2} />
        <Image source={Profile3} alt='image' style={styles.profile3} />
        <Image source={Profile4} alt='image' style={styles.profile4} />
        <Image source={Profile5} alt='image' style={styles.profile5} />
        <Image source={Profile6} alt='image' style={styles.profile6} />
        <Image source={Profile7} alt='image' style={styles.profile7} />

        </View>
      <View style={styles.method_content}>
        <Text style={styles.content_heading}>Find The Best Working People</Text>
        <View style={styles.button_container}>
        {
            method.map((d) => (
                <TouchableOpacity style={[styles.stack, {backgroundColor: d.backgroundColor}]} key={d.id}>
                    {d.image}
                    <Text style={[styles.stack_text, {color: d.textColor}]}>{d.text} </Text>
                </TouchableOpacity>
            ))
        }
        </View>
        <Text style={styles.bottom_text}>Don’t have an account?<Link href="/log_sign" > Sign Up</Link></Text>
      </View>
    </View>
  )
}

export default Log_method;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    image_container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    image1: {
        width: 300,
        height: 300,
        position: 'relative',
    },
    profile1: {
        position: 'absolute',
        left: 5,
        top: 40,
    },
    profile2: {
        position: 'absolute',
        left: 130,
        top: 15,
    },
    profile3: {
        position: 'absolute',
        top: 80,
        right: 10,
    },
    profile4: {
        position: 'absolute',
        bottom: 50,
        right: 30,
    },
    profile5: {
        position: 'absolute',
        bottom: 30,
        right: 120,
    },
    profile6: {
        position: 'absolute',
        bottom: -50,
    },
    profile7: {
        position: 'absolute',
        left: 10,
        bottom: 80,
    },
    location: {
        position: 'absolute',
        right: 50,
        top: 40,
    },
    command: {
        position: 'absolute',
        left: 50,
        bottom: 40,
    },
    method_content: {
        marginTop: 43,
        paddingHorizontal: 20,
    },
    content_heading: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'AlegreyaSC_700Bold',
        color: '#000000',
        textTransform: 'capitalize',
        textAlign: 'center',
    },
    button_container: {
        gap: 15,
        paddingHorizontal: 20,
        marginTop: 30,
    },
    stack: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 26,
        borderRadius: 32,
        padding: 8,
    },
    stack_text: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'AlegreyaSC_400Regular',
    },
    bottom_text: {
        textAlign: 'center',
        marginTop: 32,
        fontSize: 14,
        lineHeight: 19,
        fontFamily: 'Poppins_400Regular',
    }
})