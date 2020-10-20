import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={props.results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ResultsShow")}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultsList;
