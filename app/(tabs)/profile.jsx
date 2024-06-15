import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Profiles from "../../assets/images/Profile.png";
import { AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import Right from "../../assets/images/white_right_vector.svg";
import { profile_data } from '../../components/Data/Data';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Profile}>
        <Image source={Profiles} alt='images' style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>Mahrama</Text>
          <Text style={styles.mail}>maharam@gmail.com</Text>
        </View>
      </View>
      <View style={styles.data_container}>
        {
          profile_data.map((d) => (
            <TouchableOpacity style={styles.stack} key={d.id}>
              <Text style={styles.stack_text}>{d.text}</Text>
              <TouchableOpacity style={styles.arrow_container}>
                <Right />
              </TouchableOpacity>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  Profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  details: {
    gap: 4,
  },
  image: {
    width: 110,
    height: 110,
  },
  name: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: 'AlegreyaSC_700Bold',
    color: '#241353',
  },
  mail: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'Poppins_400Regular',
    color: '#808080',
  },
  data_container: {
    gap: 20,
    marginTop: 40,
    marginHorizontal: 10,
  },
  stack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 6,
    padding: 6,
    backgroundColor: '#fff',  
    shadowColor: '#D4E0EB',      
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2,       
    shadowRadius: 4,          
    elevation: 5,             
  },
  stack_text: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Poppins_400Regular',
    color: '#565656',
  },
  arrow_container: {
    padding: 10,
    borderRadius: 10,
    backgroundColor:'#241353',
    minWidth: 45,
    minHeight: 45,
    maxWidth: 45,
    maxHeight: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
