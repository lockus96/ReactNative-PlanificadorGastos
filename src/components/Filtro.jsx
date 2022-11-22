import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from './styles'

export default function Filtro({filtro, setFiltro, gastos, setGastosFiltrados}) {

     useEffect(()=>{
          if(filtro === ''){
               setGastosFiltrados([])
          } else {
               const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro )
               
               setGastosFiltrados(gastosFiltrados)
          }
     }, [filtro, gastos])

     return (
          <View style={styles.contenedor}>
               <Text style={styles.label}>
                    Filtrar Gastos
               </Text>

               <Picker
                    style={styles.input}
                    mode='dropdown'
                    selectedValue={filtro}
                    onValueChange={(valor)=>{
                         setFiltro(valor)
                    }}
               >
                    <Picker.Item
                         label='Seleccionar'
                         value=''
                    />
                    <Picker.Item
                         label='Comida 🍕'
                         value='comida'
                    />
                    <Picker.Item
                         label='Ropa 👟'
                         value='ropa'
                    />
                    <Picker.Item
                         label='Salidas 🥳'
                         value='salidas'
                    />
                    <Picker.Item
                         label='Viajes ✈️'
                         value='viajes'
                    />
                    <Picker.Item
                         label='Servicios 📺'
                         value='servicios'
                    />
                    <Picker.Item
                         label='Otros 🛠️'
                         value='otros'
                    />
               </Picker>
          </View>
     )
}

const styles = StyleSheet.create({
     contenedor: {
          transform: [{ translateY: 0 }],
          marginTop: 90,
          marginHorizontal: 20,
     },
     label: {
          fontSize: 20,
          fontWeight: '900',
          color: 'white',
          textTransform: 'uppercase'
     },
     input: {
          marginTop: 15,
          color: 'black',
          backgroundColor: '#fff',
     },
})
