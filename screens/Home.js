import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the home screen</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "#fff",
    alignItems: "top",
    justifyContent: "center",
  },
});

