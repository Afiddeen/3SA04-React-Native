import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Forcast(props){
    return(

        <View>
            <Text style={style.font1}>{props.main}</Text>
            <Text style={style.font2}>{props.description}</Text>
            <Text style={style.font3}>{props.temp}</Text>
            <Text style={style.font4}>°C</Text>
        </View>
    )
} 

const style = StyleSheet.create({
    font1: {
        color: '#8B8B83',
        textAlign: 'center',
        fontSize: 20,
    },
    font2: {
        color: '#8B8B83',
        textAlign: 'center',
        fontSize: 20,
    },
    font3: {
        color: '#F4A460',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    font4: {
        color: '#FFFF',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
})