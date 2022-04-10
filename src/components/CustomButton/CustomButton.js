import { View, Text, StyleSheet,TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1860EF',
        width: '100%',
        padding :15,
        marginVertical: 5,
        alignItems:'center',
        borderRadius: 100,
    },
    text:{
      fontWeight: 'bold',
      color:'white',
    }
})

export default CustomButton