import { NavigationContainer } from "@react-navigation/native";

import TabRoutes from "./tabRoutes";

export default function App() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}
