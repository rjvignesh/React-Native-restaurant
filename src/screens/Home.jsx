import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import Tab from "./Tabs";


const Stack = createNativeStackNavigator();
const Home= ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={
                {headerShown:false}
            }>
                <Stack.Screen name="Tab" component={Tab}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Home;