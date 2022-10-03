import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import Titel from "../components/Title"

const Home=({navigation})=>{
  return(
    <View style={styles.container}>
        <Titel titleText='Quizzler' />
        <View style={styles.bannerContainer}>
            <Image 
            source={{
              uri:'https://cdni.iconscout.com/illustration/premium/preview/boy-giving-online-test-4438985-3726680.png?w=0&h=700'
            }}
             style={styles.banner}
             resizeMode="cover"
            />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Quiz')} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
          
        </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  banner:{
    height:300,
    width:400
  },
  bannerContainer:{
    justifyContent:"center",
    alignItems:"center",
    flex:1
  },
  container:{
    paddingTop:40,
    paddingHorizontal:20,
    height:'100%'
  },
  button:{
      width:'100%',
      backgroundColor:'#1A759F',
      borderRadius:12,
      alignItems:"center",
      padding:12,
      marginBottom:30
  },
  buttonText:{
    fontSize:24,
    fontWeight:'bold',
    color:"white"
    
  }

})

export default Home;