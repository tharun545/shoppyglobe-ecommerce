import { useState, useEffect } from "react";
import axios from "axios";
export default function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch(() => setError("Failed to load products"));
  }, []);

  return { products, error };
}
