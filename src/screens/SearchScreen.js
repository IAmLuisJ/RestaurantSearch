import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScren = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View>
      <SearchBar
        setTerm={(newTerm) => setSearchTerm(newTerm)}
        term={searchTerm}
        onTermSubmit={() => console.log("Term submitted")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScren;
