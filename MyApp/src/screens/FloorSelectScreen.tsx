import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const FloorSelectScreen = () => {
  const navigation = useNavigation<any>();
  console.log('🚽 FloorSelectScreen 렌더링됨');

  return (
    <View>
      <Text>층을 선택하세요</Text>
      <Button title='8층' onPress={() => {
        console.log('8층 선택');
        navigation.navigate('ToiletSelect',{floor:8})
      }}/>
      <Button title='9층' onPress={() => {
        console.log('9층 선택');
        navigation.navigate('ToiletSelect',{floor:9})
      }}/>
    </View>
  )
}

export default FloorSelectScreen