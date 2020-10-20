import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchAPI, results, errorMessage] = useResults();

  const filterResultsByCost = (price) => {
    return results.filter((item) => {
      return item.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        setTerm={(newTerm) => setSearchTerm(newTerm)}
        term={searchTerm}
        onTermSubmit={() => searchAPI()}
      />
      <Text style={styles.text}>We found {results.length} results</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByCost("$")}
        />
        <ResultsList title="Average" results={filterResultsByCost("$$")} />
        <ResultsList title="Pricey" results={filterResultsByCost("$$$")} />
        <ResultsList title="Expensive" results={filterResultsByCost("$$$$")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
  },
  container: {
    flex: 1,
  },
});

export default SearchScreen;
