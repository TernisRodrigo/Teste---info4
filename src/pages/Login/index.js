import React, {useContext, useState} from "react";
import Logo from "../../../assets/Logo.login.png";
import { Image, View, Text, TextInput, TouchableOpacity, Switch } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import Icon from "react-native-vector-icons/FontAwesome";

export function Login (){
    
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const {setUsuario} = useContext(AuthContext)
    const [logado, setLogado] = useState(true);


    function Acesso() {

        if(email=='rodrigo@info4.com' && senha=='123456'){
          navigation.navigate('Feed');
          return true
        }else{
          return false
        }
      }
      function handleLogin() {
        if (Acesso()){
          setUsuario({
            email,
            senha,
          })
        }
        else{
          alert("Email ou senha invalido. ")
        }
      }

    const navigation = useNavigation ()

    const [ativo, setAtivo] = useState(false)
    const togle = () => {
        setAtivo(previousState => !previousState)

    }

    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.image} source={Logo} />
            </View>
            <View style={styles.login}>                
                <TextInput style={styles.caixa} 
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu e-mail"/>
            </View> 
            <View style={styles.senha}>                
                <TextInput style={styles.caixa} 
                value={senha} 
                onChangeText={setSenha}
                secureTextEntry={true}
                placeholder="Digite sua senha"/>
            </View> 
            {/* <View style={styles.cxswitch}>
                <Text> Manter conectado </Text>
                <Switch style={styles.switch} 
                        onValueChange={togle} 
                        value={ativo} 
                        onPress={() => setHidePass1(!hidePass1)}>
                          {ativo}
                        </Switch>
            </View> */}
            <View style={styles.cxswitch}>
           
            <TouchableOpacity
              
              onPress={() => setLogado(!logado)}
            >
              {logado ? (
                <Icon name="circle-o" color="black" size={22} />
               
              ) : (
                <Icon name="check" color="black" size={22} />
              )}
            </TouchableOpacity>
            <Text> Manter conectado </Text>
            </View>
          
            <View style={styles.cxbuton}>
                <TouchableOpacity onPress={handleLogin} style={styles.buton}>
                    <Text> Entrar </Text>
                </TouchableOpacity>
            </View>
        
        
        
        </View>  

    )

}