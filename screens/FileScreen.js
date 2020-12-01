import React, { useState, state, setState } from 'react';
import { StyleSheet, SafeAreaView, Button, Text, Image } from "react-native";
import Colors from '../utils/colors';
import * as ImagePicker from 'expo-image-picker';

export default function FileScreen({navigation}) {

    const[photo, setPhoto] = useState('photo')

    handleChoosePhoto = async() => {
        ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
          }).then(result => setPhoto(result));

    }


    return (<SafeAreaView style={styles.container}>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
        <Button
        title="LOAD IMAGE"
        style={styles.backButton}
        size={30}
         onPress={() => handleChoosePhoto()}
      />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center'
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'center'
    }
  });
  
  