import { DrawerItemList } from '@react-navigation/drawer';
import React from 'react'
import { View, Image } from 'react-native';
export default function DrawerPersonalizado(props) {
    return (
        <View>
            <View style={{
                marginTop: 50,
                alignItems: 'center'
            }}>
                <Image 
                    source={require('../../imgs/logo.png')} 
                    style={{
                        width: 100,
                        height: 100,
                        marginBottom: 10,
                        objectFit: 'contain'
                    }} />
            </View>
            <DrawerItemList {...props} />
        </View>
    )
}