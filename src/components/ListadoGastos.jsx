import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setModal, setGasto, filtro, gastosFiltrados }) => {

     return (
          <View style={styles.contenedor}>
               <Text
                    style={styles.titulo}>
                    Gastos
               </Text>

               { filtro ? gastosFiltrados.map( gasto => (
                    <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setModal={setModal}
                    setGasto={setGasto}
                    />
               )) : gastos.map( gasto => (
                    <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setModal={setModal}
                    setGasto={setGasto}
                    />
               )) }

               { gastosFiltrados.length === 0 && (
                    <Text
                         style={styles.noGastos}
                    >
                         Ups, hasta acá llegamos
                    </Text>
               ) }     
               
               {/* No funciona el || por algunra razón */}
               
               { gastos.length === 0 && (
                    <Text
                         style={styles.noGastos}
                    >
                         Ups, hasta acá llegamos
                    </Text>
               ) }     

               <View 
                    style={styles.space}
               >

               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     contenedor: {
          marginTop: 30
     },
     titulo: {
          color: '#64748B',
          fontSize: 30,
          textAlign: 'center',
          fontWeight: '700',
          marginBottom: 20,
     },
     noGastos: {
          marginTop: 20,
          color: 'black',
          textAlign: 'center',
          fontSize: 20,
          marginBottom: 100
     },
     space: {
          height: 80
     }
})

export default ListadoGastos 