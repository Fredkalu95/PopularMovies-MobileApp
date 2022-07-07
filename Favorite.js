import React, { useEffect, useState } from 'react'
import { Button } from 'react-native';
import { View, Text } from 'react-native';


function Card({movie}) {

    
    const [favorite, setFavorite] = useState([]); // <= this state holds the id's of all favorite reciepies
  
  // following function handles the operation of adding fav recipes's id's
  
    const addToFavorite = id => {
      if (!favorite.includes(id)) setFavorite(favorite.concat(id));
      console.log(id);
    };
  
  // this one does the exact opposite, it removes the favorite recipe id's
    const removeFavorite = id => {
      let index = favorite.indexOf(id);
      console.log(index);
      let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
      setFavorite(temp);
    };
  
  // this variable holds the list of favorite recipes, we will use it to render all the fav movies
    let findfavorite = (movie => favorite.includes(movie.id));

    return (
        

        <View>
        <Text>favorite recipes</Text>
        
          {favorite.map((movie, i) => {
              
            
          })}
        </View>
          
    );
}

export default Card;