import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import PerfilGrafiteiroScreen from "../pages/Perfil-Grafiteiro"
import  InsertPropertyScreen  from "../pages/InsertProperty"

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>

            <Tab.Screen
                name='PerfilGrafiteiro'
                component={PerfilGrafiteiroScreen}
            />

            <Tab.Screen
                name='InsertProperty'
                component={InsertPropertyScreen}
            />

        </Tab.Navigator>
    )
}