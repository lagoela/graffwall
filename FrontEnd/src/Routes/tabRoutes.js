import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';


import PerfilGrafiteiroScreen from "../pages/PerfilGrafiteiro";
import ButtonPlus from '../components/ButtonPlus';
import PerfilOwnerScreen from "../pages/PerfilOwner";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (

        <Tab.Navigator
            initialRouteName='Wall'
            screenOptions={{
                tabBarStyle: {
                    borderTopColor: 'transparent',                   
                    position: 'absolute',
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,                    
                    height: 60,
                    backgroundColor: '#F4F4F4',
                    elevation: 9
                    
                    
                },
                tabBarShowLabel: false
            }}
        >

            <Tab.Screen
                name='Graff'
                component={PerfilGrafiteiroScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Image source={require("../assets/imgSpray.png")} style={styles.tabImages} />
                    ), 
                }}
            />

            <Tab.Screen
                name='ButtonPlus'
                component={PerfilGrafiteiroScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <ButtonPlus size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name='Wall'
                component={PerfilOwnerScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Image source={require("../assets/imgMala.png")} style={styles.tabImages} />
                    )
                }}
            />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabImages: {
        width: 40,
        height: 40,
    }
})