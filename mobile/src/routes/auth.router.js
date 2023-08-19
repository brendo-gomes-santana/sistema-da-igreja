import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native';
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
                    headerTitle: 'Agendar'
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
                    headerTitle: 'Configuração'
                }}/>
        </Drawer.Navigator>
    )
}