import React, { useState, useRef, useEffect, useCallback, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, StatusBar, Animated, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { pages } from "../components/Data/Data";
import { router } from "expo-router";
import Button from "../components/Button/Button";
import Pagination from "../components/Pagination/Pagination";
import * as SplashScreen from 'expo-splash-screen';
import Next from "../assets/images/next.svg";
import Dark_next from "../assets/images/dark_next.svg";
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_400Regular_Italic, Poppins_700Bold, Poppins_700Bold_Italic, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { AlegreyaSC_400Regular, AlegreyaSC_400Regular_Italic, AlegreyaSC_500Medium, AlegreyaSC_700Bold, AlegreyaSC_800ExtraBold } from '@expo-google-fonts/alegreya-sc';
import ThemeContext from "../theme/ThemeContext";

const { width } = Dimensions.get('window');

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { theme, toggleTheme, darkMode } = useContext(ThemeContext);
  const navigation = useNavigation();
  const swiperRef = useRef(null);
  const totalPages = pages.length;
  const [activePageIndex, setActivePageIndex] = useState(0);

  const [fontsLoaded] = useFonts({
    AlegreyaSC_400Regular,
    AlegreyaSC_400Regular_Italic,
    AlegreyaSC_500Medium,
    AlegreyaSC_700Bold,
    AlegreyaSC_800ExtraBold,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_500Medium,
    
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const headingOpacity = useRef(new Animated.Value(1)).current;
  const descriptionOpacity = useRef(new Animated.Value(1)).current;
  const paginationOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (fontsLoaded) {
      animateContent();
    }
  }, [activePageIndex, fontsLoaded]);

  const animateContent = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(headingOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
        Animated.timing(descriptionOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(headingOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
        Animated.timing(descriptionOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
      ])
    ]).start();
  };

  const handleImageScroll = (event) => {
    const pageIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActivePageIndex(pageIndex);
  };

  const handleNextPress = () => {
    const nextIndex = Math.min(activePageIndex + 1, totalPages - 1);
    swiperRef.current.scrollTo({ x: nextIndex * width, animated: true });
    setActivePageIndex(nextIndex);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={[styles.safearea, {backgroundColor: theme.background}]} onLayout={onLayoutRootView}>
        <StatusBar 
        translucent
        backgroundColor="transparent"
        barStyle={darkMode ? "light-content" : "dark-content"} 
      />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={swiperRef}
        onScroll={handleImageScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ width: width * totalPages }}
        style={{ flex: 1 }}
      >
        {pages.map((page, index) => (
          <View key={index} style={[styles.page, { width }]}>
            <View style={styles.imageContainer}>
              <Image source={page.image} alt="images" style={styles.image} />
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.onboard_content}>
        <Animated.View style={{ opacity: paginationOpacity }}>
          <Pagination activePageIndex={activePageIndex} totalPages={totalPages} />
        </Animated.View>
        <Animated.Text style={[styles.heading, { opacity: headingOpacity, color: theme.color }]}>
          {pages[activePageIndex].heading}
        </Animated.Text>
        <Animated.Text style={[styles.description, { opacity: descriptionOpacity, color: theme.text2 }]}>
          {pages[activePageIndex].Text}
        </Animated.Text>
        <View style={styles.page_button_container}>
          {activePageIndex === totalPages - 1 ? (
            <View style={{ paddingTop: 15, alignItems: 'center' }}>
              <Button
                buttonText="Get started"
                backgroundColor="#241353"
                textColor='#FFFFFF'
                onPress={() => router.push('log_method')}
              />
            </View>
          ) : (
            <TouchableOpacity onPress={handleNextPress} style={{ paddingTop: 15, alignItems: 'center' }}>
            { darkMode? <Dark_next /> : <Next />}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
    
  },
  imageContainer: {
    height: 330,
    maxWidth: 360,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 330,
    resizeMode: 'contain',
  },
  onboard_content: {
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: 40,
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'AlegreyaSC_700Bold',
    color: '#000000',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Poppins_400Regular',
    color: '#474747',
    textAlign: 'center',
    marginBottom: 20,
  },
  page_button_container: {
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  nextButton: {
    backgroundColor: '#FF7735',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
