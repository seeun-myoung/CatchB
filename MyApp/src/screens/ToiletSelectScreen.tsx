import { View, Text, Button } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';


const ToiletSelectScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const params = route.params || {};
  const floor  = params.floor;
  console.log(params, floor,route,navigation)
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${floor}층 남/여 선택`,  // 🔥 타이틀 동적 변경
    });
  }, [floor,navigation]);

  
  return (
    <View>
      <Text> {floor}성별을 선택하세요</Text>
      <Button title='여자' onPress={() => console.log('여자 선택')}/>
      <Button title='남자' onPress={() => console.log('남자 선택')}/>
    </View>
  )
}

export default ToiletSelectScreen