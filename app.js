import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Header } from 'react-native-elements';

import FaceBookScreen from './screens/fb';
import InstaScreen from './screens/in';

export default class App extends React.Component{
    render(){
        return(
            <View>
                <Header centerComponent={{text:'BuzzApp',style:{fontWeight:'bold',fontSize:25,color:'white'}}} backgroundColor={'yellow'}/>
                <AppContainer/>
            </View>
        )
    }
}

const BottomTabNavigator = createBottomTabNavigator({
    FaceBook:{screen:FaceBookScreen},
    Insta:{screen:InstaScreen}
})

const AppContainer = createAppContainer(BottomTabNavigator)