import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.containerStyle}>
      <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
      <Text style={styles.detailStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 10,
  },
  detailStyle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 15,
    marginBottom: 5,
  },
});

export default ResultsDetail;
