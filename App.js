// In App.js in a new project

import * as React from 'react';
import { View, Text , StyleSheet,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { voidTypeAnnotation } from '@babel/types';

const Stack = createNativeStackNavigator();


let App = () => {
  return (
    // <NavigationContainer>
    //  <Stack.Navigator>
    //   </Stack.Navigator>/>
    // </NavigationContainer>
    <Home></Home>
  );
}

function Home() {
   return (
      <View style ={{marginRight:17, marginLeft:20, marginBottom: 32 ,flex:1, backgroundColor:'red',}}>
        <View style={{backgroundColor:'#005690', height: 100 , width: 100, alignItems:'center'}}>
          <Image source = {require('./assets/react-logo.png')} style={{height: 100, width: 100}}></Image>   
        </View>
      </View>
   );
 }

export default App;