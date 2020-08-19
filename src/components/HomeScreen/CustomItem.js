import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Divider } from 'react-native-elements';

export function CustomItem(props){
    return <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={props.onPress}
        >
        <Text style={styles.text}>{props.cityName}</Text>
        <Divider color="white" style={{marginHorizontal:25,marginVertical:2}}/>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    touchableOpacity:{
        margin:5,
    },
     text:{
         color:"white",
         fontSize:20,
         fontWeight:"bold",
         alignSelf:"center"

     }
})