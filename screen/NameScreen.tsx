import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/NavigationTypes';
import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils';

const NameScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    getRegistrationProgress('Name').then((progressData) => {
      if (progressData) {
        setFirstName(progressData.firstName || '');
        setLastName(progressData.lastName || ''); // Optional if `lastName` is saved
      }
    });
  }, []);

  const handleNext = () => {
    if (firstName.trim() !== '') {
      saveRegistrationProgress('Name', { firstName, lastName });
    }
    navigation.navigate('Email');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ marginTop: 50, textAlign: 'center', color: 'gray' }}>
        NO BACKGROUND CHECKS ARE CONDUCTED
      </Text>
      <View style={{ marginTop: 30, marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderWidth: 2,
              borderColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <MaterialCommunityIcons
              name="newspaper-variant-multiple-outline"
              size={28}
              color="black"
            />
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={28}
            color="black"
            style={{ marginLeft: 20 }}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              fontFamily: 'GeezaPro-Bold',
            }}
          >
            What's your name?
          </Text>

          <TextInput
            autoFocus={true}
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            placeholder="First Name (required)"
            placeholderTextColor={'#BEBEBE'}
            style={{
              width: 340,
              marginTop: 25,
              marginVertical: 10,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              fontFamily: 'GeezaPro-Bold',
              fontSize: firstName ? 22 : 22,
            }}
          />

          <TextInput
            autoFocus={false}
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            placeholder="Last Name"
            placeholderTextColor={'#BEBEBE'}
            style={{
              width: 340,
              marginTop: 25,
              marginVertical: 10,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              fontFamily: 'GeezaPro-Bold',
              fontSize: lastName ? 22 : 22,
            }}
          />

          <Text style={{ fontSize: 15, color: 'gray', fontWeight: '500' }}>
            Last name is optional
          </Text>
        </View>

        <TouchableOpacity onPress={handleNext} activeOpacity={0.8} style={{ marginTop: 30, marginLeft: 'auto' }}>
          <MaterialCommunityIcons
            style={{ alignSelf: 'center', marginTop: 20 }}
            name="arrow-right-circle"
            size={45}
            color="#581845"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NameScreen;

const Style = StyleSheet.create({});
