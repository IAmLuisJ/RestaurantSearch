import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ term, setTerm, onTermSubmit }) => {
  return (
    <View style={styles.searchBackground}>
      <Ionicons name="ios-search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        value={term}
        onChangeText={(e) => setTerm(e)}
        placeholder="Search"
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
    fontSize: 18,
    padding: 5,
  },
  searchBackground: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection: "row",
  },
  iconStyle: {
    fontSize: 30,
    color: "black",
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
