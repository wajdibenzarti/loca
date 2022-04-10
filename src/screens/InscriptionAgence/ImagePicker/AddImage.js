import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import CustomButton from '../../../components/CustomButton/CustomButton';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';


const AddImage = () => {

  renderInner = () => (
    <Text>Hello</Text>
  );

  renderHeader = () => (

    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHeader}></View>
      </View>
    </View>

  );

  bs = React.createRef();
  fall = new Animated.Value(1)

  const [image, setImage] = useState('https://i.imgur.com/TkIrScD.png')

  let openImagePickerAsync = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setImage(image.path)

    });
  }

  return (
    <View style={styles.container}>
           <BottomSheetBehavior
        ref={this.bs}
        snapPoints={[300, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      

      <Image source={{ uri: image }} style={styles.logo} />
      <Text style={styles.instructions}>
        Cliquez sur le bouton ci-dessous Pour déposer un ficher de votre agence     </Text>
      <CustomButton text="Prendre le document en photo" onPress={() => this.bs.current.snapPoints(0)} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    backgroundColor: '#FFFFF',
    shadowColor: '#33333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20

  },

  panelHeader: {
    alignItems: 'center'
  },

  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1860EF',
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 100,

  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default AddImage