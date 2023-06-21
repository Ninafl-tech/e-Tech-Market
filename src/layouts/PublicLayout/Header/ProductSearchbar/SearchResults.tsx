import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { TProduct } from "../../../../types/Tproduct";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState<TProduct[]>([]);
  const [error, setError] = useState<any>("");

  //   const { query } = useParams();

  async function searchProduct() {
    try {
      const resp = await axios.get(
        `https://dummyjson.com/products/search?q=${searchParams.get("q")}`
      );
      setSearchResults(resp.data?.products);
    } catch (error: any) {
      setError(error.message);
    }
  }

  useEffect(() => {
    console.log(searchParams.get("q"));
    searchProduct();
  }, []);

  return (
    <div>
      {searchResults.map((searchResult) => (
        <div key={searchResult.id}>
          <p>{searchResult.title}</p>
        </div>
      ))}
    </div>
  );
}
