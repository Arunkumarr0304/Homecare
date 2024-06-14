import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, {useState} from 'react';
import Icon from "../../assets/images/home_icon.png";
import Notification from "../../assets/images/notification.png";
import { AlegreyaSC_400Regular, AlegreyaSC_500Medium, AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import Search from '../../assets/images/search.svg';
import { card_data, cate_data } from '../../components/Data/Data';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import I from "../../assets/images/i.svg";
import Right from "../../assets/images/right_vector.svg";
import Services from '../../components/Services/Services';
import Recommend from '../../components/Recommend/Recommend';

const Home = () => {
    const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_left}>
            <Image source={Icon} alt='image' style={styles.icon} />
            <Text style={styles.heading}>HandyCare</Text>
        </View>
        <Image source={Notification} alt='image' style={styles.notification} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
              <View style={styles.search_section}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
        
      />
      <TouchableOpacity style={styles.search_btn}>
        <Search />
      </TouchableOpacity>
      </View>
      <Text style={styles.cate}>Categories</Text>
      <ScrollView horizontal={true} style={styles.cate_container}>
        {
            cate_data.map((d) => (
                <View style={styles.stack} key={d.id}>
                    <View style={[styles.image_box, {backgroundColor: d.bg_color}]}>
                    {d.image}
                    </View>
                    <Text style={styles.cate_text}>{d.text}</Text>
                </View>
            ))
        }
      </ScrollView>

      <ScrollView horizontal={true} style={styles.card_container}>
        {
            card_data.map((d) => (
                <View style={[styles.card, {backgroundColor: d.bg_color}]} key={d.id} >
                    <View style={styles.card_left}>
                        <View style={styles.card_head}>
                        <Text style={styles.card_heading}>{d.heading}</Text>
                        <I />
                        </View>
                        <Text style={styles.offer}>{d.offer}</Text>
                        <TouchableOpacity style={styles.card_button}>
                        <Text style={styles.card_text}>{d.button_text}</Text>
                            <Right />
                        </TouchableOpacity>
                    </View>
                    {d.image}
                </View>
            ))
        }
      </ScrollView>
      <Services />
      <Recommend />
      </ScrollView>

    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
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
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'AlegreyaSC_700Bold',
        color: '#241353',
    },
    icon: {
        width: 50,
        height: 44,
    },
    notification: {
        width: 30,
        height: 30,
    },
    search_section: {
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#241353',
        borderRadius: 39,
        paddingVertical: 10,
        paddingLeft: 20,
        paddingRight: 60,
        position: 'relative',
        
    },
    search_btn: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#241353',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
    },
    cate: {
        fontSize: 16,
        lineHeight: 21,
        fontFamily: 'AlegreyaSC_700Bold',
        color: '#000000',
        marginTop: 30,
    },
    cate_container: {
        flexDirection: 'row',
        marginTop: 15,
    },
    stack: {
        alignItems: 'center',
        marginRight: 15,
        gap: 10,
    },
    image_box: {
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        minHeight: 62,
        maxHeight: 65,
        minWidth: 60,
        maxWidth: 60,
    },
    cate_text: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Poppins_400Regular',
        color: '#828282',
    },
    card_container: {
        flexDirection: 'row',
        marginTop: 30,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
        borderRadius: 12,
        paddingHorizontal: 13,
        paddingVertical: 22,
        marginRight: 15,
    },
    card_left: {
        gap: 12,
    },
    card_head: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    card_heading: {
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'AlegreyaSC_500Medium',
        color: '#000000',
    },
    offer: {
        fontSize: 40,
        lineHeight: 50,
        fontFamily: 'AlegreyaSC_500Medium',
        color: '#000000',
    },
    card_button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 5,
        borderRadius: 30,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
    },
    card_text: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'AlegreyaSC_400Regular',
        color: '#241353',
    }
    
})