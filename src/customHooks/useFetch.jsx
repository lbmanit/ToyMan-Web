import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    fetchData().catch((err) => console.log(err));
  }, [url]);
  return { data };
}
export default useFetch;
