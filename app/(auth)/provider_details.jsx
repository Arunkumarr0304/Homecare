import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import Back from "../../assets/images/back2.svg";
import { details_head, review_row, reviews } from '../../components/Data/Data';
import { AlegreyaSC_500Medium, AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import { Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import Details from "../../assets/images/provider_details.png";
import Button from '../../components/Button/Button';

const Provider_details = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <View style={styles.header_left}>
            <Back />
            <View style={styles.provider}>
            <Text style={styles.provider_name}>Emily Jani</Text>
            <Text style={styles.work}>Plumber</Text>
            </View>
           
        </View>
        <View style={styles.list_container}>
                {
                    details_head.map((d) => (
                        <TouchableOpacity style={styles.circle} key={d.id}>
                            {d.icon}
                        </TouchableOpacity>
                    ))
                }
            </View>
            
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.provider_details}>
                <Text style={styles.details}>
                I'm Emily Jani, a dedicated plumbing professional with a passion for delivering 
top notch service to ensure your home's plumbing runs smoothly. 
With years of hands-on experience.
                </Text>
                <Image source={Details} alt='image'  style={styles.image} />
            </View>
            <View style={styles.review_row}>
                {
                    review_row.map((d) => (
                        <View style={styles.column} key={d.id}>
                        {d.image}
                        <Text style={styles.review_text}>{d.text}</Text>
                        </View>
                    ))
                }
            </View>
                <Text style={styles.available}>Available</Text>
                <View style={styles.time_row}>
                    <Text style={styles.time}>7:00AM</Text>
                    <Text style={styles.to}>To</Text>
                    <Text style={styles.time}>10:00pM</Text>
                </View>
                <Text style={styles.review}>Review</Text>
                <View style={styles.review_container}>
                    {
                        reviews.map((d) => (
                            <View style={styles.review_box} key={d.id}>
                                 <View style={styles.review_top_row}>
                                    <View style={styles.row_left}>
                                        <Image source={d.image} alt='image' style={styles.images} />
                                        <Text style={styles.reviewer_name}>{d.reviewer}</Text>
                                    </View>
                                    <Text style={styles.date}>{d.date}</Text>
                                </View>
                                {d.star}
                                <Text style={styles.description}>{d.review}</Text>
                            </View>
                        ))
                    }
                </View>
                <View style={styles.button_box}>
                    <Button buttonText="book now" />
                </View>
                </ScrollView>
                </View>
  )
}

export default Provider_details;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
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
        gap: 25,
    },
    provider: {

    },
    provider_name: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'AlegreyaSC_700Bold',
        color: '#241353',
    },
    work: {
        fontSize: 14,
        lineHeight: 21,
        fontFamily:  'Poppins_500Medium',
        color: '#565656',
    },
    list_container: {
        flexDirection: 'row',
        alignItems:'center',
        gap: 12,
    },
    circle: {
        borderRadius: 50,
        backgroundColor: '#AC9FD1',
        padding: 5,
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    provider_details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginTop: 10,
    },
    details: {
        fontSize: 11,
        lineHeight: 22,
        fontFamily: 'Poppins_400Regular',
        color: '#565656',
        maxWidth: 180,
    },
    image: {
        width: 140,
        height: 140,
    },
    review_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 18,
        marginBottom: 30,
    },
    column: {
        maxWidth: 70,
        alignItems: 'center',
        gap: 10,
    },
    review_text: {
        fontSize: 12,
        lineHeight: 24,
        fontFamily: 'AlegreyaSC_500Medium',
        color: '#565656',
        alignItems: 'center',
        textAlign: 'center',
    },
    available: {
        fontSize: 16,
        lineHeight:  21,
        fontFamily: 'AlegreyaSC_500Medium',
        color: '#000000',
    },
    time_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '60%',
        marginTop: 15,
    },
    time: {
        fontSize: 12, 
        lineHeight: 18,
        fontFamily: 'Poppins_400Regular',
        color: '#000000',
    },
    to: {
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Poppins_500Medium',
        color: '#808080',
    },
    review: {
        fontSize: 16,
        lineHeight: 21,
        fontFamily: 'AlegreyaSC_700Bold',
        color: '#000000',
        marginTop: 30,
    },
    review_container: {
        gap: 10,
        marginTop:25,
    },
    review_box: {
        
    },
    review_top_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    row_left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    images: {
        width: 24,
        height: 24,
        borderRadius: 5,
    },
    reviewer_name: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'AlegreyaSC_700Bold',
        color: '#241353',
    },
    date: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: 'Poppins_400Regular',
        color: '#565656',
    },
    description: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Poppins_500Medium',
        color: '#808080',
        marginTop: 15,
    },
    button_box: {
        marginVertical: 50,
        paddingBottom: 50,
    }
})