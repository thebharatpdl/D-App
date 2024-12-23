import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import { RootStackParamList } from '../navigation/NavigationTypes';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { saveRegistrationProgress } from '../registrationUtils';

const PasswordScreen = () => {
  const [password, setPassword] = useState('');
  

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  const handleNext = () => {
    if (password.trim()!==''){
      saveRegistrationProgress('Password',{password})
    }
    navigation.navigate('Birth'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <AntDesign name="lock" size={28} color="black" />
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

        <Text style={styles.title}>Please choose the password</Text>
        
        <TextInput
          autoFocus={true}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter your password"
          placeholderTextColor="#BEBEBE"
          style={styles.input}
        />

        <Text style={styles.note}>
          Note: Your details will be safe with us
        </Text>
        
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentWrapper: {
    marginTop: 50,
    marginHorizontal: 20,
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
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'GeezaPro-Bold',
    marginTop: 25,
  },
  input: {
    width: 340,
    marginTop: 25,
    marginVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontFamily: 'GeezaPro-Bold',
    fontSize: 22,
  },
  note: {
    fontSize: 15,
    color: 'gray',
    marginTop: 7,
  },
});

export default PasswordScreen;
