import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Image, FlatList, Text, TouchableOpacity } from "react-native";
import { Header } from "../../components/Header";
import { api } from "../../service/Api";
import styles from "./style";
import { FontAwesome } from '@expo/vector-icons';

export function Feed() {

    const [posts, setPosts] = useState([])

    async function GetGames() {    //async / await = sempre atualiza e vem o elemento principal
        const response = await api.get(`/games?key=166eed850cc44172b44826a00202dde3`)
        console.log("aaa", response.data)
        setPosts(response.data.results) //passando o valor de response pa uma constante posts, para ser usado fora da function GetGames

    }
    useEffect(() => {
        GetGames()
    }, [])

    function RenderItem({ item: post }) {
        return (
            <View style={styles.caixa}>
                <View style={styles.img}>
                    <Image style={{ width: "99.9%", height: 200, borderRadius: 4 }} source={{ uri: post.background_image }} />
                </View>

                <View style={styles.caixa1}>

                    <View style={styles.jogo}>
                        <Text style={{ fontSize: 25, fontWeight: "bold" }}> {post.name} </Text>
                    </View>
                    <View style={styles.lancamento}>
                        <Text style={{ fontSize: 17, fontWeight: "500" }}> Lançamento: {post.released}</Text>
                    </View>
                    <View style={styles.rating}>
                        <Text style={{ fontSize: 17, fontWeight: "500" }}> Rating: {post.rating} 
                        / 5.00  <FontAwesome style={styles.star} name="star" size={20} color="yellow" /></Text>
                        <TouchableOpacity>
                            <FontAwesome style={styles.heart} name="heart" size={20} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    };

    return (
        <View>
            <Header />
            <FlatList
                data={posts}
                renderItem={RenderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}