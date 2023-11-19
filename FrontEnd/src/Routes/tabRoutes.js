import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'

import PerfilGrafiteiroScreen from "../pages/PerfilGrafiteiro"
import PerfilOwnerScreen from "../pages/PerfilOwner"

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>

            <Tab.Screen
                name='Graff'
                component={PerfilGrafiteiroScreen}
            />

            <Tab.Screen
                name='Wall'
                component={PerfilOwnerScreen}
            />

        </Tab.Navigator>
    )
}