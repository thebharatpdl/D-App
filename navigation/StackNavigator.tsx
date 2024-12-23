import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './NavigationTypes'; // <-- Import the param list type

// Import screens
import HomeScreen from '../screen/HomeScreen';
import LikesScreen from '../screen/LikesScreen';
import ChatScreen from '../screen/ChatScreen';
import ProfileScreen from '../screen/ProfileScreen';
import BasicInfo from '../screen/BasicInfo';
import PasswordScreen from '../screen/PasswordScreen';
import BirthScreen from '../screen/BirthScreen';
import LocationScren from '../screen/LocationScren';
import TypeScreen from '../screen/TypeScreen';
import NameScreen from '../screen/NameScreen';
import EmailScreen from '../screen/EmailScreen';
import PhotoScreen from '../screen/PhotoScreen';
import PromptsScreen from '../screen/PromptsScreen';
import ShowPromptScreen from '../screen/ShowPromptScreen';
import PreFinalScreen from '../screen/PreFinalScreen';
import GenderScreen from '../screen/GenderScreen';
import DatingType from '../screen/DatingType';
import LookingFor from '../screen/LookingFor';
import HomeTownScreen from '../screen/HomeTownScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import { AuthContext } from '../AuthContext';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>(); // <-- Use the type here
    const Tab = createBottomTabNavigator();
    const { isLoading, token } = useContext(AuthContext);

    function BottomTab() {
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { backgroundColor: '#101010' },
                    tabBarLabelStyle: { color: '#008397' },
                    headerShown: false,
                    tabBarShowLabel: false,
                }}
            >
                <Tab.Screen
                    name="Home" // Renamed from "Home" to "HomeTab"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Entypo name="home" size={30} color="white" />
                            ) : (
                                <Entypo name="home" size={30} color="#989898" />
                            ),
                    }}
                />
                {/* Other tab screens here... */}
            </Tab.Navigator>
        );
    }

    const AuthStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Basic" component={BasicInfo} options={{ headerShown: false }} />
                <Stack.Screen name="Name" component={NameScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Email" component={EmailScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Password" component={PasswordScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Birth" component={BirthScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Location" component={LocationScren} options={{ headerShown: false }} />
                <Stack.Screen name="Gender" component={GenderScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Type" component={TypeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Dating" component={DatingType} options={{ headerShown: false }} />
                <Stack.Screen name="LookingFor" component={LookingFor} options={{ headerShown: false }} />
                <Stack.Screen name="HomeTown" component={HomeTownScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Photos" component={PhotoScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Prompts" component={PromptsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ShowPrompts" component={ShowPromptScreen} options={{ headerShown: false }} />
                <Stack.Screen name="PreFinal" component={PreFinalScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />

            </Stack.Navigator>
        );
    };
    function MainStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={BottomTab}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        );
    };
    return (
        <NavigationContainer>
            {token == null || token == '' ? <AuthStack /> : <MainStack />}
        </NavigationContainer>
    );
};

export default StackNavigator;

const styles = StyleSheet.create({});