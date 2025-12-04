import {  View, Text,  ScrollView } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';

const ToiletStatusScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const gender = route.params.gender;
  const floor = route.params.floor;
  console.log(floor,navigation,gender)
  
  return (
    <View>
      <Text>화장실을 선택해주세요</Text>
      <ScrollView></ScrollView>
    </View>
  )
}

//const styles  = StyleSheet.create({})
export default ToiletStatusScreen