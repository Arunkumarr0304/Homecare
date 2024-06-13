import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import Star from "../../assets/images/recommend_star.svg";
import Approved from "../../assets/images/approved.svg";
import { recommend_data } from '../Data/Data';

const Recommend = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our Top Recommended</Text>
      <View style={styles.box_container}>
        {
            recommend_data.map((d) => (
                <View style={styles.box} key={d.id}>
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
                </View>
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
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
    box: {
        borderColor: '#34275A',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 12,
        position: 'relative',
    },
    profile: {
        width: 90,
        height: 90,
        position: 'absolute',
    },
    approved: {
        position: 'absolute',
    },
    box_body: {
        paddingTop: 45,
        paddingBottom: 12,
    }
})