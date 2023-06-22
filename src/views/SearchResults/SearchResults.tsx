import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { TProduct } from "../../types/Tproduct";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Product } from "../ProductDetailView/components/Product/Product";

export default function SearchResults() {
  const { searchKeyword } = useParams();
  const { data, isLoading, error } = useQuery(
    ["searchResults", searchKeyword],
    async () => {
      const resp = await axios.get(
        `https://dummyjson.com/products/search?q=${searchKeyword}`
      );
      return resp?.data;
    },
    {
      useErrorBoundary: (error: any) => error.response?.status >= 500,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {data?.products.map((searchResult: TProduct) => (
        <div key={searchResult.id}>
          <Product product={searchResult} />
        </div>
      ))}
    </div>
  );
}
