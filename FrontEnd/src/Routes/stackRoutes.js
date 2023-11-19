import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../pages/Welcome";
import SignIn from "../pages/Singin";
import HomeScreen from "../pages/Home"

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />

      <Stack.Screen
        name="Signin"
        component={SignIn}
      />

      <Stack.Screen
        name='Home'
        component={HomeScreen}
      />
    </Stack.Navigator>  
      
  );
}