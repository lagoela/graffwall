import { createDrawerNavigator } from '@react-navigation/drawer';

import TabRoutes from './tabRoutes';


const Drawer = createDrawerNavigator();


export default function DrawerRoutes() {
    return (
        <Drawer.Navigator>

            <Drawer.Screen
                name="GraffWall"
                component={TabRoutes}
            />

        </Drawer.Navigator>
    )
}