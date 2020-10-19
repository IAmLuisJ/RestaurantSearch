import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchAPI = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          limit: 50,
          location: "San Jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
      setErrorMessage("Something went Wrong");
    }
  };

  useEffect(() => {
    searchAPI("Pizza");
  }, []);

  return [searchAPI, results, errorMessage];
};
