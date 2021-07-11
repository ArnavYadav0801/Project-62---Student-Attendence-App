import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import AppHeader from "./components/AppHeader"
import SummaryScreen from "./screens/SummaryScreen"
import HomeScreen from "./screens/HomeScreen"
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

export default class App extends React.Component{
render(){
    return(
      <View>
      <AppHeader/>
      <AppContainer/>
      </View>
    )
  }
}
  


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen,
  
})

const AppContainer = createAppContainer(AppNavigator)