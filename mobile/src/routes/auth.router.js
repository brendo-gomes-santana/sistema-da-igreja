import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/home/inde';
import User from '../pages/User';

const Drawer = createDrawerNavigator();

export default function RotasLogadas(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name='home' 
                component={Home}
                options={{
                    headerStyle: {
                        backgroundColor: '#1B3358',
                    },
                    headerTintColor: '#fff',
                    headerTitle: 'Agendar',
                    drawerLabel: 'Agendar'
                }}
                />
            <Drawer.Screen 
                name='user' 
                component={User} 
                options={{
                    headerStyle: {
                        backgroundColor: '#1B3358'
                    },
                    headerTintColor: '#fff',
                    headerTitle: 'Configuração',
                    drawerLabel: 'Configuração'
                }}/>
        </Drawer.Navigator>
    )
}