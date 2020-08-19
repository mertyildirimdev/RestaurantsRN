import React from 'react'
import { SafeAreaView, StyleSheet, ImageBackground } from "react-native";

import { CustomCard } from "../components/RestaurantDetails";

export function RestaurantDetails(props){
    const details = props.route.params.clickedRestaurant
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.image} source={require('../assets/bg3.jpg')}>
                <CustomCard details={details}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
     
    },
    image: {
      flex: 1,
      resizeMode: "contain",
      justifyContent: "center"
    },
  });