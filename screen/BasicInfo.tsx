import { NavigationProp, useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import React, { Component } from 'react'
import { Text, View, SafeAreaView, Pressable } from 'react-native'
import { RootStackParamList } from '../navigation/NavigationTypes'

const BasicInfo =()=>{
 const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const handleNext = () => {
      navigation.navigate('Name');
    };
    return ( 
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View>
          <Text
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              fontFamily: 'GeezaPro=BOld',
              marginLeft: 20,
            }}>
            You're one of a kind.</Text>


          <Text
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              fontFamily: 'GeezaPro-BOld',
              marginLeft: 20,
            }} >
            You're Profile should bo too.</Text>

        </View>

        <View>
          <LottieView style={{ height: 260,
             width: 300, 
             alignSelf: 'center',
              marginTop: 40, 
              justifyContent: 'center' }} 
              source={require("../assets/Animation - 1728186324468.json")}
              autoPlay
              loop={true}
              speed={0.7} />
        </View>

<Pressable
onPress={handleNext}
 style={{ backgroundColor: '#780000',padding:15,marginTop:'auto'}}>
   <Text
     style={{
       fontSize: 20,
       fontWeight: '600',
     color:'white',
     textAlign:'center'
     }}>
     Enter Basic Info.</Text>

</Pressable>


      </SafeAreaView>
    )
  }


export default BasicInfo

