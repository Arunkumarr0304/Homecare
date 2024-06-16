import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import ThemeContext from '../../theme/ThemeContext';

const CheckCircle = ({ size = 18, color = '#241353', checked, onPress }) => {
    const innerCircleSize = size - 8; 
    const { theme, toggleTheme, darkMode } = useContext(ThemeContext);
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.outerCircle, { width: size, height: size, borderColor:darkMode? theme.heading :  color }]}>
                {checked && <View style={[styles.innerCircle, { width: innerCircleSize, height: innerCircleSize, backgroundColor: darkMode? theme.heading : color }]} />}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    outerCircle: {
        borderRadius: 50,
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle: {
        borderRadius: 50,
    },
});

export default CheckCircle;
