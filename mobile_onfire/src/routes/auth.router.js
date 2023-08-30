import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerPersonalizado from '../components/DrawerPersonalizado';

import Home from '../pages/home';
import User from '../pages/User';

import DetalheAgendamento from '../pages/DetalheAgendamento';
import DetalheLouvor from '../pages/DetalheLouvor';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function RotasDoHome() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='detalhe' component={DetalheAgendamento} options={{ headerShown: false }} />
            <Stack.Screen name='detalhe-louvor' component={DetalheLouvor} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}


export default function RotasLogadas() {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerPersonalizado {...props} />}
            screenOptions={{
                drawerInactiveTintColor: '#fff',
                drawerActiveTintColor: '#fff',
                drawerStyle: {
                    backgroundColor: '#000',
                }
            }}
        >
            <Drawer.Screen
                name='groupHome'
                component={RotasDoHome}
                options={{
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                    headerTitle: 'Agenda',
                    drawerLabel: 'Agenda',
                }}
            />
            <Drawer.Screen
                name='user'
                component={User}
                options={{
                    headerStyle: {
                        backgroundColor: '#000'
                    },
                    headerTintColor: '#fff',
                    headerTitle: 'Configuração',
                    drawerLabel: 'Configuração'
                }} />
        </Drawer.Navigator>
    )
}