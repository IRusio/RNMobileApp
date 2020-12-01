  import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

import useStatusBar from '../hooks/useStatusBar';
import { logout } from '../components/Firebase/firebase';

export default function HomeScreen({ navigation }) {
  useStatusBar('dark-content');
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
    <Button title="Camera" onPress={() => navigation.navigate('PhotoModule')} />
    <Button title="File" onPress={() => navigation.navigate('FileModule')} />
    <Button title="Sign Out" onPress={handleSignOut} />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
