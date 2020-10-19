import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScren = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchAPI, results, errorMessage] = useResults();

  const filterResultsByCost = (price) => {
    return results.filter((item) => {
      return item.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        setTerm={(newTerm) => setSearchTerm(newTerm)}
        term={searchTerm}
        onTermSubmit={() => searchAPI()}
      />
      <Text>We have found {results.length} results</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ResultsList title="Cost Effective" results={filterResultsByCost("$")} />
      <ResultsList title="Average" results={filterResultsByCost("$$")} />
      <ResultsList title="Pricey" results={filterResultsByCost("$$$")} />
      <ResultsList title="Expensive" results={filterResultsByCost("$$$$")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScren;
