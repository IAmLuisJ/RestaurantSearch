import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const searchID = async (i) => {
    try {
      const response = await yelp.get(`/${i}`);
      setResult(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    searchID(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <FlatList
        horizontal={true}
        style={styles.listStyle}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
      <Text style={styles.header}>{result.name}</Text>
      <Text style={styles.subheader}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
      <Text>{result.location.display_address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
  },
  subheader: {
    fontSize: 14,
    marginLeft: 10,
  },
  image: {
    height: 200,
    width: 300,
  },
  listStyle: {},
});

export default ResultShowScreen;
