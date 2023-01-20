import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Platform, SafeAreaView, StatusBar, Text } from "react-native";

const Menu = ()=>{
    return (
        <SafeAreaView style={{ marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null}}>
            <Text>kj sadk haajksd najksd </Text>
        </SafeAreaView>
    )
}

export default Menu;