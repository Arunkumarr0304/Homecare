import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { tab } from '../../components/Data/Data';

const Log_sign = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tab_container}>
        {
            tab.map((d) => (
                <TouchableOpacity style={styles.tab} key={d.id}>
                    <Text style={styles.tab_text}>{d.name}</Text>
                </TouchableOpacity>
            ))
        }
      </View>
    </View>
  )
}

export default Log_sign;

const styles = StyleSheet.create({})