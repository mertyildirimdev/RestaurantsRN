import { SafeAreaView, ImageBackground, FlatList, StyleSheet } from "react-native";
import React from "react";
import axios from "axios";

import { CustomItem } from "../components/HomeScreen";
import { SearchBar } from 'react-native-elements';



export function RestaurantsScreen(props) {
  const url =
    "https://opentable.herokuapp.com/api/restaurants?city=" +
    props.route.params.cityName;
  const [restaurants, setRestaurants] = React.useState([]);
  const [cpList, setCpList] = React.useState([]);
  const [search, setSearch] = React.useState([])


  React.useEffect(()=>{
      fetchRestaurants()
  },[])


  const fetchRestaurants = async () => {
    let { data } = await axios.get(url);
    console.log(data.restaurants)
    setRestaurants(data.restaurants);
    setCpList(data.restaurants);
  };

  const searchRestaurant = (text) => {
    let filteredList = cpList.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setRestaurants(filteredList);
    setSearch(text)
  };

  return (
    <SafeAreaView style={styles.container}>
       <ImageBackground style={styles.image} source={require('../assets/bg2.jpg')}>
       <SearchBar
        containerStyle={{backgroundColor:"#2222"}}
        placeholder="Find Your Restaurants.."
        onChangeText={searchRestaurant}
        value={search}
      />
       <FlatList
        keyExtractor={(item,index) => index.toString()}
        data={restaurants}
        renderItem={({ item }) => <CustomItem cityName={item.name} onPress={()=>{
          props.navigation.navigate("RestaurantDetails", {clickedRestaurant:item})
        }}/>}
      />
       </ImageBackground>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
  });