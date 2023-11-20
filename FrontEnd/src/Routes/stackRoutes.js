import { createStackNavigator } from "@react-navigation/stack";


import Login from "../pages/Login";
import SignIn from "../pages/Singin";
import CadastroWallScreen from "../pages/CadastroWalls";
import TabRoutes from './tabRoutes';


const Stack = createStackNavigator();

export default function StackRoutes() {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen
        name="Login"
        component={Login}
      />

      <Stack.Screen
        name="Signin"
        component={SignIn}
      />

      <Stack.Screen
        name="CadastroWall"
        component={CadastroWallScreen}
      />

      <Stack.Screen
        name="TabBar"
        component={TabRoutes}
      />

    </Stack.Navigator>

  );
}