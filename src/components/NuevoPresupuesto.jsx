import React, { useState } from 'react'
import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native'
import globalStyles from './styles'

export default function NuevoPresupuesto({handeNuevoPresupuesto}) {

     const [ presupuesto, setPresupuesto ] = useState(0)

  return (
     <View style={styles.contenedor}>
          <Text style={styles.label}>
               Definir Presupuesto
          </Text>
          <TextInput 
               keyboardType='numeric'
               placeholder='Agrega tu presupuesto'
               placeholderTextColor={'black'}
               style={styles.input}
               value={presupuesto.toString()}
               onChangeText={setPresupuesto}
          />
          <Pressable 
               style={styles.boton}
               onPress={()=> handeNuevoPresupuesto(presupuesto)}
          >
               <Text style={styles.botonTexto}>
                    Agregar Presupuesto
               </Text>
          </Pressable>
     </View>
  )
}

const styles = StyleSheet.create({
     contenedor: {
          ...globalStyles.contenedor
     },
     label: {
          textAlign: 'center',
          color: '#3b82f6',
          fontSize: 24,
     },
     input: {
          backgroundColor: '#f5f5f5',
          padding: 10,
          borderRadius: 15,
          textAlign: 'center',
          marginTop: 30,
          color: 'black'
     },
     boton: {
          marginTop: 30,
          marginHorizontal: 30,
          backgroundColor: '#1048a4',
          padding: 10,
          borderRadius: 13,
     },
     botonTexto: {
          color: '#fff',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 'bold'
     },

})