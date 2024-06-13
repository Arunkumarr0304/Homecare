import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { tab } from '../../components/Data/Data';
import { AlegreyaSC_700Bold } from '@expo-google-fonts/alegreya-sc';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import { Link, router } from "expo-router";

const Log_sign = () => {
  const [activeTab, setActiveTab] = useState(tab[0].id);



  return (
    <View style={styles.container}>
      <View style={styles.tab_container}>
        {tab.map((d) => (
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === d.id && styles.activeTab
            ]}
            key={d.id}
            onPress={() => setActiveTab(d.id)}
          >
            <Text style={styles.tab_text}>{d.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.content}>
        {activeTab === 1 && <Login />}
        {activeTab === 2 && <Signup />}
      </View>
    </View>
  );
};

export default Log_sign;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  tab_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
    minWidth: 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 3,
  },
  activeTab: {
    borderBottomColor: '#241353',
  },
  tab_text: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: 'AlegreyaSC_700Bold',
    color: '#241353',
    textTransform: 'capitalize',
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
