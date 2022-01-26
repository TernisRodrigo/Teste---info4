import React from "react";
import { Login } from "../pages/Login";
import { Feed } from "../pages/Feed";
import {createStackNavigator} from "@react-navigation/stack";

export function Routes () {
   
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator>

            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
            <Stack.Screen name="Feed" component={Feed} options={{headerShown:false}} />
            
        </Stack.Navigator>



    )


}