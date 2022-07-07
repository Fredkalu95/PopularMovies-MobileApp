import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button, Text, View,  } from 'react-native';
import { ScrollView, AppRegistry } from 'react-native';
import { useEffect, useState } from 'react';
import MovieComponent from './MovieComponent';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { SafeAreaView } from 'react-native';



export default function App() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=19dedc791dc255982eaf84be8a93012a&language=en-US&page=1";
  
  const [popular, setPopular] = useState([]);
  
  

    
  const fetchPopular = async () => {
      const data = await fetch(url);
      const movies = await data.json();
      
      
      setPopular(movies.results);
  };

  useEffect(() => {
    fetchPopular();
    },[]);
  return (
    
    
    <NavigationContainer>
    <SafeAreaView style={styles.container}>
    <ScrollView
      style={styles.scrollView}
    >
       <Routes />
       
    

      {popular.map((movie, i) => (
         <MovieComponent key={i} movie={movie} />
         
      ))}

    </ScrollView>
    </SafeAreaView> 
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#000',
  },
  navBar: {
    backgroundColor: '#212121',
  },
  title: {
    color: '#fff',
  },
  buttonText: {
    color: '#b5b5b5',
  },

    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'skyblue',
      marginHorizontal: 5,
    },
    text: {
      fontSize: 42,
    },

})