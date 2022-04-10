 import React , {useState} from 'react'
 import { View, StyleSheet, ScrollView } from 'react-native'
 import CustomInput from '../../components/CustomInput/CustomInput';
 import CustomButton from '../../components/CustomButton/CustomButton';
import AddImage from './ImagePicker/AddImage';
 
 const InscriptionAgence = () => {
   const [agencname, setAgencname] = useState('');
   const [adresse, setAdresse] = useState('');
   const [ville, setVille] = useState('');
   const [postal, setPosal] = useState('');
   const onInscriagn = () =>{
     console.warn('Inscription');
   }
const onPhotPressed = () => {
  console.warn('prendre le document')
}

   return (
   <ScrollView>
     <View style={styles.root}>
       
      <CustomInput placeholder="Nom d'agence" value={agencname} setValue={setAgencname} />
      <CustomInput placeholder="Adresse" value={adresse} setValue={setAdresse}/>
      <CustomInput placeholder="Ville" value={ville} setValue={setVille}/>
      <CustomInput placeholder="Code Postal" value={postal} setValue={setPosal}/>
      <AddImage/>
     
      <CustomButton text="Inscription" onPress={onInscriagn} />
     </View>
     </ScrollView>
 
   )
 };

 const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  }
 });
 
 export default InscriptionAgence