import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Pagination = ({ activePageIndex, totalPages }) => {
  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            activePageIndex === index && styles.activeDot
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 165, 0, 0.2)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FFA500', 
    width: 8,
    height: 8,
  },
});

export default Pagination;
