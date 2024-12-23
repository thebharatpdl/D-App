import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStackParamList } from '../navigation/NavigationTypes';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils';

const EmailScreen = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    getRegistrationProgress('Email').then(progressData => {
      if (progressData) {
        setEmail(progressData.email || '')
      }
    });

  },[])
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleNext = () => {
    if (email.trim() !== '') {
      saveRegistrationProgress('Email', { email })
    }
    navigation.navigate('Password');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 50, marginHorizontal: 20 }}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>

            <Fontisto
              name="email"
              size={28}
              color="black"
              accessibilityLabel="News Icon"
              accessible
            />
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={28}
            color="black"
            style={styles.dotsIcon}
            accessibilityLabel="Options Menu"
            accessible
          />
        </View>
        <Text style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'GeezaPro-Bold' }}>
          Please provide the valid email</Text>
        <Text style={{ marginTop: 10, fontSize: 15 }}>Email verification help us to make us the account secure</Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email"
          style={{
            width: 340,
            marginTop: 25,
            marginVertical: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            fontFamily: 'GeezaPro-Bold',
            fontSize: email ? 22 : 22,
          }}
        />
        <Text style={{ fontSize: 15, color: 'gray', marginTop: 7 }}>Note:You will be ask to verify ypur email</Text>
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
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotsIcon: {
    marginLeft: 20,
  },
});

export default EmailScreen;
