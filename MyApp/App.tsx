import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FloorSelectScreen from './src/screens/FloorSelectScreen';
import ToiletSelectScreen from './src/screens/ToiletSelectScreen';
import ToiletStatusScreen from './src/screens/ToiletStatusScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* 1. 층 선택 화면 */}
        <Stack.Screen
          name="FloorSelect"
          component={FloorSelectScreen}
          options={{ title: '화장실 층 선택' }}
        />

        {/* 2. 남/여 선택 화면 - floor를 params로 받아서 title에 적용 */}
        <Stack.Screen
          name="ToiletSelect"
          component={ToiletSelectScreen}
          options={({ route }) => {
            const params:any = route.params || {};
            return{
              title:`${params.floor}층 화장실 선택`
            }
          }}           
        />

        {/* 3. 칸 상태 화면 - floor + gender를 title에 적용 */}
        <Stack.Screen
          name="ToiletStatus"
          component={ToiletStatusScreen}
          options={({ route }) => {
            const params:any = route.params || {};
            return{
             title: `${params.floor}층 ${params.floor.gender=== 'male'? '남자':'여자'} 화장실`
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;