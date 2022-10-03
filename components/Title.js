import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Titel=({titleText})=>{
  return(
    <View style={styles.container}>
        <Text style={styles.title}>{titleText}</Text>
    </View>
  );
}

export default Titel;

const styles = StyleSheet.create({
   container:{
     justifyContent:"center",
     alignItems:"center",
     paddingVertical:16
   },
   title:{
     fontSize:36,
     fontWeight:'bold'
   }

})

