import React from "react";
import { View, SafeAreaView, Image, TouchableOpacity} from "react-native";
import imgheader from "../../../assets/LogoHeader.png";
import styles from "./style";
import {AntDesign} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
 



export function Header () {

    const navigation = useNavigation()



    return(    
        <View style={styles.header}>
            <TouchableOpacity>
                <AntDesign style={styles.icon} 
                           name="leftcircle" size={35} color="black" 
                           onPress={() => navigation.navigate("Login")} /> 
            </TouchableOpacity>               
            <Image style={styles.logo} resizeMode="contain" source={imgheader}  />
       </View>
       

        


    )

}