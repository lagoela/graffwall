import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, TouchableOpacity } from 'react-native';
import { } from '@expo/vector-icons';

import PerfilGrafiteiroScreen from "../pages/PerfilGrafiteiro"
import PerfilOwnerScreen from "../pages/PerfilOwner"
import { BackgroundImage } from '@rneui/base';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator 
        
        initialRouteName='Wall'
        screenOptions={{             
            tabBarStyle: {
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                height: 70
            } 
            }} >

            <Tab.Screen
                name='Graff'
                component={PerfilGrafiteiroScreen}
                options={{headerShown: false}}  
            />

            <Tab.Screen
                name='Wall'
                component={PerfilOwnerScreen}
                options={{headerShown: false}} 
            />

        </Tab.Navigator>
    )
}