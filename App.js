import React from 'react';
import {SafeAreaView,StyleSheet,Text} from 'react-native';

import Gasolina from './componentes/gasolina.js'
import Etanol from './componentes/etanol.js'
import BtnCalcular from './componentes/btnCalcular.js'
import Resultado from './componentes/resultado.js'
import ImgResultado from './componentes/imgResultado.js'




export default function App(){
  return(
    <SafeAreaView style={estilos.principal}>
      <Gasolina/>
      <Etanol/>
      <BtnCalcular/>
      <Resultado/>
      <ImgResultado/>
    </SafeAreaView>
  )
}
 

const estilos = StyleSheet.create({
  principal:{
    padding:10,
  }
  
});

