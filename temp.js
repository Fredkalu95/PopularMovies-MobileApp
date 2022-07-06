import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, AppRegistry } from 'react-native';
import { useEffect, useState } from 'react';
import MovieComponent from './MovieComponent';
import ReactDOM from "react-dom";



export default function App() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=19dedc791dc255982eaf84be8a93012a&language=en-US&page=1";
  
  const [popular, setPopular] = useState([]);
  const [likedMovies, updateLikedMovies] = React.useState([]);
    
  const fetchPopular = async () => {
      const data = await fetch(url);
      const movies = await data.json();
      
      
      setPopular(movies.results);
  };

  useEffect(() => {
    fetchPopular();
    },[]);
  return (
    
    <ScrollView 
      contentContainerStyle={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: 'skyblue',
        marginHorizontal: 10,
      }}
    >
      
      {popular.map((movie, i) => (
         <MovieComponent key={i} movie={movie} />
      ))}
      

    </ScrollView> 
    
  )
}




