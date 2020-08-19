import React from "react";
import { Text, View, Linking } from "react-native";
import { Card, Icon } from "react-native-elements";

export function CustomCard(props) {
  const details = props.details;
  return (
    <Card
      image={{ uri: details.image_url }}
      title={details.name}
      containerStyle={{
        borderRadius: 10,
      }}
    >
      <Text>{details.address}</Text>
      <Text>{details.area}</Text>
      <Text>{details.phone}</Text>
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Text>{details.state}</Text>
        <Icon 
        containerStyle={{marginRight:20}}
        name="calendar"
        type="font-awesome"
        onPress={()=>{
            Linking.openURL(details.mobile_reserve_url)
        }}
        />
      </View>
    </Card>
  );
}
