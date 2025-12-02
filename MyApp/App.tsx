import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FloorSelectScreen from './src/screens/FloorSelectScreen';
import ToiletSelectScreen from './src/screens/ToiletSelectScreen';

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
        <Stack.Screen
          name="ToiletSelect"
          component={ToiletSelectScreen}
          options={{ title: '남여 화장실 선택' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
