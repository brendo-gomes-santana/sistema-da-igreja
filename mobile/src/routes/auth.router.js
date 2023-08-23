import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/home';
import User from '../pages/User';
import DetalheAgendamento from '../pages/DetalheAgendamento';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function RotasDoHome(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Stack.Screen name='detalhe' component={DetalheAgendamento} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}


export default function RotasLogadas(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name='groupHome' 
                component={RotasDoHome}
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