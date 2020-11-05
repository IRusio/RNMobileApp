import  React from 'react';
import IconButton from "../components/IconButton";
import useStatusBar from "../hooks/useStatusBar";
import { StyleSheet, View, Button } from 'react-native';
import Colors from '../utils/colors';

export default function PhotoModuleScreen({ navigation }) {
  useStatusBar('dark-content');
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
    return (
      <View>
      <div>
      </div>
      <Button title="Home" onPress={() => navigation.goBack()}/>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 15,
      backgroundColor: Colors.mediumGrey
    },
    backButton: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10
    }
  });