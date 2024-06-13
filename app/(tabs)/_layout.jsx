import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Tabs } from 'expo-router';
import React from 'react';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import CategoryIcon from '../../components/Categoryicon';

const TabIcon = ({ icon, color, library, custom }) => {
  if (custom) {
    return React.cloneElement(custom, { color });
  }
  const IconComponent = library === 'FontAwesome' ? FontAwesome : MaterialIcons;
  return <IconComponent name={icon} size={24} color={color} />;
};

const TabBarButton = ({ children, onPress, accessibilityState, title }) => {
  const isSelected = accessibilityState.selected;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.tabButton, isSelected ? styles.activeTabButton : null]}
    >
      {children}
      <Text style={[styles.tabTitle, isSelected ? styles.activeTabTitle : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const TabsLayout = () => {
  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#241353',
          tabBarInactiveTintColor: '#757575',
          tabBarButton: (props) => <TabBarButton {...props} title={route.name} />,
          tabBarStyle: [styles.tabBar],
          headerShown: false,
        })}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <TabIcon icon="home" color={color} library="FontAwesome" />,
          }}
        />
        <Tabs.Screen
          name="categories"
          options={{
            title: 'Categories',
            tabBarIcon: ({ color }) => <CategoryIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="booking"
          options={{
            title: 'Booking',
            tabBarIcon: ({ color }) => <TabIcon icon="file-text" color={color} library="FontAwesome" />,
          }}
        />
        <Tabs.Screen
          name="services"
          options={{
            title: 'Services',
            tabBarIcon: ({ color }) => <TabIcon icon="build" color={color} library="MaterialIcons" />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <TabIcon icon="user" color={color} library="FontAwesome" />,
          }}
        />
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  tabBar: {
    width: '100%',
    maxHeight: 85,
    height: '100%',
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    paddingTop: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  tabTitle: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'AlegreyaSC_400Regular',
    marginBottom: 5,
  },
  activeTabTitle: {
    color: '#241353',
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'AlegreyaSC_700Bold',
  },
  activeTabButton: {},
});

export default TabsLayout;
