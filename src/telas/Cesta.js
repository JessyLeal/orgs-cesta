import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
        <Image source={topo} style={estilos.topo}/>
        <Text style={estilos.titulo}>Detalhes da cesta</Text>
        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Cesta de verduras</Text>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemFazenda}/>
                <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
            </View>
            <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a cozinha</Text>
            <Text style={estilos.preco}>R$ 40.00</Text>
        </View>

    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    descricao:{
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda:{
        width: 32,
        height: 32
    },
    titulo: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        fontSize: 22,
        lineHeight: 26,
        color: "white",
        fontWeight: 500,
        padding: 16
    },
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    nome:{
        fontSize:26,
        lineHeight:42,
        color: '#464646',
        fontWeight: 500
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 500,
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});