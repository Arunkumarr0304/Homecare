import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Profiles from "../../assets/images/Profile.png";
import { AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import Right from "../../assets/images/white_right_vector.svg";
import Dark_Right from "../../assets/images/big_dark_right.svg";
import { profile_data } from '../../components/Data/Data';
import ThemeContext from '../../theme/ThemeContext'; 

const Profile = () => {
  const { theme, toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.Profile}>
        <Image source={Profiles} alt='images' style={styles.image} />
        <View style={styles.details}>
          <Text style={[styles.name, { color: theme.color }]}>Mahrama</Text>
          <Text style={[styles.mail, { color: theme.text }]}>maharam@gmail.com</Text>
        </View>
      </View>
      <View style={styles.data_container}>
        {profile_data.map((d) => (
          <TouchableOpacity
            style={[styles.stack, { backgroundColor: theme.cardbg, shadowColor: theme.overlay }]}
            key={d.id}
            onPress={d.id === 4 ? toggleTheme : null} 
          >
            <Text style={[styles.stack_text, { color: theme.text }]}>{d.text}</Text>
            <TouchableOpacity style={[styles.arrow_container, { backgroundColor: theme.color }]}>
              {darkMode ? <Dark_Right /> : <Right />}
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
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
  },
  mail: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'Poppins_400Regular',
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
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2,       
    shadowRadius: 4,          
    elevation: 5,             
  },
  stack_text: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Poppins_400Regular',
  },
  arrow_container: {
    padding: 10,
    borderRadius: 10,
    minWidth: 45,
    minHeight: 45,
    maxWidth: 45,
    maxHeight: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
