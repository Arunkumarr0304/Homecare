import React from 'react';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='home' options={{ headerShown: false }} />
      <Tabs.Screen name='profile' options={{ headerShown: false }} />
      // Add more tab screens here
    </Tabs>
  );
};

export default TabsLayout;
