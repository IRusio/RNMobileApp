import React, {useState, state, useEffect} from "react"
import { SafeAreaView, Text, Button, View, StyleSheet, ActivityIndicator, FlatList, } from "react-native"
import { ScrollView } from "react-native-gesture-handler";


export default function WebScreen({navigation}) {

    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async() => {
        console.log("dupa")
        setLoading(true)
        fetch('https://reactnative.dev/movies.json')
          .then((response) => response.json())
          .then((json) => setData(json.movies))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      };

    return (
        <View style={styles.container}>
            {isLoading && <ActivityIndicator/>}
            {data && 
                <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
        }
            <Button title={"Download Movies"} onPress={fetchData}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      padding: 30,
      paddingTop: 60
      
    }
  });