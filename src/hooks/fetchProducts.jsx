import React, {useEffect, useState} from 'react';
import Config from 'react-native-config';

const useFetchProducts = url => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const u = url;
        console.log(url);
        const res = await fetch(`${Config.BASE_URL}${url}`);
        const jsonData = await res.json();
        console.log(jsonData);
        setProducts(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    });
  }, [url]);

  return {products, loading, error};
};

export default useFetchProducts;
