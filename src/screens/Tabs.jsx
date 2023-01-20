import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon  } from "@rneui/themed";
import React from "react";
import { Text , TouchableOpacity, View } from "react-native";
import Menu from "./Menu";

const Tabs = createBottomTabNavigator();

const Tab = ()=>{
    return (
        <Tabs.Navigator 
        initialRouteName="search"
        
        screenOptions={ ({route}) => ({
            tabBarStyle:{backgroundColor:"transparent",borderTopWidth:0,elevation:0},
            headerShown:false,
            tabBarShowLabel:false,
            tabBarIcon : ({size,color})=>{
                switch(route.name){
                    case "Menu":{
                        return <Icon
                            name="restaurant"
                            size={size}
                            color={color}
                            />
                    }
                    case "search":{
                        return <Icon
                            name="search"
                            size={size}
                            color={color}
                            />                        
                    }
                    case "like":{
                        return <Icon
                            name="favorite"
                            size={size}
                            color={color}
                            />                        
                    }
                    case "profile":{
                        return <Icon
                            name="person"
                            size={size}
                            color={color}
                            />                        
                    }                                        
                }},
            tabBarButton: ({accessibilityState,children,onPress})=>{
                if (accessibilityState.selected === true){
                    return <TouchableOpacity 
                    style={{
                        justifyContent:"center",
                        alignItems:"center",
                        flex:1,
                        onPress:{onPress}
                    }}>    
                            <View style={{
                                height:50,
                                width:50,
                                borderRadius:25,
                                top:-25,
                                backgroundColor:"white",
                            }}>
                            {children}
                            </View>
                           </TouchableOpacity>
                }
                return <TouchableOpacity 
                style={{flex:1}}
                onPress={onPress}>
                {children}
                </TouchableOpacity>;
            }
            }
            
            )}>
            <Tabs.Screen name="Menu" component={Menu}/>
            <Tabs.Screen name="search" component={Menu}/>
            <Tabs.Screen name="like" component={Menu}/>
            <Tabs.Screen name="profile" component={Menu}/>
        </Tabs.Navigator>
    )
}

export default Tab;