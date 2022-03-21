import { useEffect, useState, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchURL = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetchURL();
  }, [url, fetchURL]);

  return { loading, data };
};
