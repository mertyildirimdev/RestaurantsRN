import React from "react";
import { SafeAreaView, ImageBackground, FlatList, StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";

import { CustomItem } from "../components/HomeScreen";
import { SearchBar } from 'react-native-elements';

import axios from "axios";

export function HomeScreen(props) {
  const [cities, setCities] = React.useState([]);
  const [cpList, setCpList] = React.useState([]);
  const [search, setSearch] = React.useState([])

  React.useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    let { data } = await axios.get(
      "https://opentable.herokuapp.com/api/cities"
    );
    setCities(data.cities);
    setCpList(data.cities)
  };

  const searchCity = (text) => {
    let filteredList = cpList.filter((item) => {
      const itemData = item.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setSearch(text)
    setCities(filteredList);
  };


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image} source={require('../assets/bg2.jpg')}>
      <StatusBar style="dark" />
      <SearchBar
        containerStyle={{backgroundColor:"#2222"}}
        placeholder="Find Your City..."
        onChangeText={searchCity}
        value={search}
      />
      <FlatList
        keyExtractor={(index) => index.toString()}
        data={cities}
        renderItem={({ item }) => <CustomItem cityName={item} onPress={()=>{
          props.navigation.navigate("RestaurantsScreen",{cityName:item})
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