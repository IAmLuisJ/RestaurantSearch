import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultsList = (props) => {
  return (
    <View>
      <Text style={styles.listStyle}>{props.title}</Text>
      <FlatList
        horizontal={true}
        data={props.results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsList;
