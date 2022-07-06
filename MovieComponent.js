// A component that return a Movie
import React from "react";
import { View, StatusBar, StyleSheet,TouchableOpacity, Image,Text } from "react-native";

const MovieComponent = ({movie}) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", marginTop: StatusBar.currentHeight, }}>
      <TouchableOpacity>
      
      <Image
          style={{
            width: 250,
            height: 200,
            margin: 5,
            borderRadius: 10,
            borderRadius: 1,
            marginBottom: 1,
            resizeMode:'contain',
            alignSelf: 'center',
          }}
          source={{uri: "https://image.tmdb.org/t/p/w500" + movie.backdrop_path, }}
        />
        <View style={{alignItems: "center"}}>
        
        <Text style={styles.titleText}>{movie.title}</Text>
        <Text style={styles.baseText}>{movie.overview}</Text>

        </View>
        

      </TouchableOpacity>
    </View>
      
    
  );
};
const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin",
 
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
      
    }
  });

export default MovieComponent;
