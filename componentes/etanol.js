import React from 'react';
import {StyleSheet,Text,View,TextInput} from 'react-native';

export default props=>{
    return(
        <View style={estilos.bloco}>
            <Text>Digite o preço do Etanol</Text>
            <TextInput
                style={estilos.txt}
                keyboardType='numeric'
                onChangeText={text=>props.aoModificar(text)}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    bloco: {
        marginBottom:10
    },
    txt: {
        borderColor: '#000',
        borderWidth:2,
        borderRadius:7,
    }
  
});