import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import MyStack from './Navigation';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result';

const App=()=>{
  return(
    
        <NavigationContainer>
        <MyStack />
        </NavigationContainer>
  );

}

export default App;

const styles = StyleSheet.create({


})

