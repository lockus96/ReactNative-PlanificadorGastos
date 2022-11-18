import React from 'react'
import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native'
import globalStyles from './styles'

export default function NuevoPresupuesto({
     handeNuevoPresupuesto, 
     presupuesto, 
     setPresupuesto
}) {


  return (
     <View style={styles.contenedor}>
          <Text style={styles.label}>
               Definir Presupuesto
          </Text>
          <TextInput 
               keyboardType='numeric'
               placeholder='Agrega tu presupuesto'
               placeholderTextColor={'#808080'}
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
          zIndex: 20,
          backgroundColor: '#fff',
          marginHorizontal: 50,
          borderRadius: 50,
          paddingVertical: 20,
          paddingHorizontal: 20,
          transform: [{ translateY: 120 }],
          shadowColor: "#000",
          shadowOffset: {
               width: 0,
               height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,

          elevation: 10,
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
          color: 'black',
          fontSize: 25,
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