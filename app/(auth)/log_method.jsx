import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AlegreyaSC_400Regular, AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import Button from '../../components/Button/Button';
import { method } from '../../components/Data/Data';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Link, router } from "expo-router";

const Log_method = () => {
  return (
    <View style={styles.container}>
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