import { NavigationProp, useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Pressable } from 'react-native';
import { RootStackParamList } from '../navigation/NavigationTypes';
import { AuthContext } from '../AuthContext';
import { getRegistrationProgress } from '../registrationUtils';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PreFinal = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { token,setToken } = useContext(AuthContext);

  const [userData, setUserData] = useState<any>(null); // Define userData state

  useEffect(()=>{
    if(token){
      navigation.replace("MainStack",{screen:"Main"})
    }
  },[token])
  useEffect(() => {
    getAllUserData();
  }, []);

  const getAllUserData = async () => {
    try {
      const screens = [
        'Basic',
        'Name',
        'Email',
        'Password',
        'Location',
        'Gender',
        'Dating',
      ];

      // Fetch all screen data concurrently
      const userDataArray = await Promise.all(
        screens.map((screenName) => getRegistrationProgress(screenName))
      );

      // Merge the fetched data
      const mergedData = userDataArray.reduce((acc, data) => {
        return data && typeof data === 'object' ? { ...acc, ...data } : acc;
      }, {});

      setUserData(mergedData); // Set merged data to state

      // Log merged user data to the console
      console.log('Final merged user data:', mergedData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
const clearAllScreenData=async()=>{
  try{
    const screens = [
      'Basic',
      'Name',
      'Email',
      'Password',
      'Location',
      'Gender',
      'Dating',
    ];
    for (const screenName of screens){
      const key=`register_progress_${screenName}`;
      await AsyncStorage.removeItem(key)
    };
    console.log("All screen data cleared")
  }catch(error){
console.log("Error",error)
  }
}
  const registerUser = async () => {
    if (!userData) {
      console.log("No user data to register");
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/register", userData);
      const token = response.data.token;
      await AsyncStorage.setItem("token", token);
      setToken(token);
      clearAllScreenData();
      console.log("User registered successfully", response);
    } catch (error) {
      console.log("Error registering user:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
          }}
        >
          All set to register.
        </Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
          }}
        >
          Setting up your profile for you.
        </Text>
      </View>

      <View>
        <LottieView
          style={{
            height: 260,
            width: 300,
            alignSelf: 'center',
            marginTop: 40,
            justifyContent: 'center',
          }}
          source={require('../assets/Animation - 1728186324468.json')}
          autoPlay
          loop
          speed={0.7}
        />
      </View>

      <Pressable
        onPress={registerUser}
        style={{ backgroundColor: 'black', padding: 15, marginTop: 'auto' }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: 'white',
            textAlign: 'center',
          }}
        >
          Finish Registering
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PreFinal;
