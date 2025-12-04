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
      <Text>성별을 선택하세요</Text>
      <Button title='여자' onPress={() => {
        navigation.navigate('ToiletStatus',{floor, gender: 'female'});
      }}/>
      <Button title='남자' onPress={() => {
        navigation.navigate('ToiletStatus',{floor, gender: 'male'});
      }}/>
    </View>
  )
}

export default ToiletSelectScreen