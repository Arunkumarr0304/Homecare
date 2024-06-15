import { StyleSheet, Text, View, Image,  ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import Clean from "../../assets/images/cleaning.svg";
import Main from "../../assets/images/maintance.svg";
import Secure from "../../assets/images/security.svg";
import Improve from "../../assets/images/improve.svg";
import { Main_data, cleaning_data, improve_data, secure_data } from '../../components/Data/Data';
import { Link, router } from "expo-router";


const Categories = () => {

  const details = () => {
    router.push('cate_details');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollpart}>
      <View style={styles.header}>
        <Clean />
        <Text style={styles.list_heading}>Cleaning</Text>
      </View>
      <View style={styles.stack_container}>
        {
          cleaning_data.map((d) => (
            <TouchableOpacity style={styles.stack} key={d.id} onPress={details}>
            <Image source={d.image} style={styles.image} />
            <Text style={styles.stack_text}>{d.text}</Text>
          </TouchableOpacity>
          ))
        }
 
      </View>
      <View style={styles.header}>
        <Main />
        <Text style={styles.list_heading}>Maintance</Text>
      </View>
      <View style={styles.stack_container}>
        {
          Main_data.map((d) => (
            <TouchableOpacity style={styles.stack} key={d.id} onPress={details} >
            <Image source={d.image} style={styles.image} />
            <Text style={styles.stack_text}>{d.text}</Text>
          </TouchableOpacity>
          ))
        }
 
      </View>

      <View style={styles.header}>
        <Secure />
        <Text style={styles.list_heading}>Security</Text>
      </View>
      <View style={styles.stack_container}>
        {
          secure_data.map((d) => (
            <TouchableOpacity style={styles.stack} key={d.id} onPress={details} >
            <Image source={d.image} style={styles.image} />
            <Text style={styles.stack_text}>{d.text}</Text>
          </TouchableOpacity>
          ))
        }
 
      </View>

      <View style={styles.header}>
        <Improve />
        <Text style={styles.list_heading}>Home Improvement</Text>
      </View>
      <View style={styles.stack_container}>
        {
          improve_data.map((d) => (
            <TouchableOpacity style={styles.stack} key={d.id} onPress={details} >
            <Image source={d.image} style={styles.image} />
            <Text style={styles.stack_text}>{d.text}</Text>
          </TouchableOpacity>
          ))
        }
 
      </View>
      </ScrollView>
    </View>
  )
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'AlegreyaSC_700Bold',
    color: '#241353',
  },
  scrollpart: {
    marginBottom: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginVertical: 20,
  },
  list_heading: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'AlegreyaSC_700Bold',
    color: '#241353',
    borderBottomColor: '#241353',
    borderBottomWidth: 2,
  },
  stack_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  image: {
    width: 95,
    height: 83,
  },
  stack_text: {
    fontSize: 11,
    lineHeight: 22,
    fontFamily: 'AlegreyaSC_700Bold',
    color: '#000000',
    textAlign: 'center',
    maxWidth: 110,
  }
})