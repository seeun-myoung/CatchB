import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FloorSelectScreen from './src/screens/FloorSelectScreen';

// Supabase import
//import { supabase } from './src/lib/supabase';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FloorSelect"
          component={FloorSelectScreen}
          options={{ title: '화장실 층 선택' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
