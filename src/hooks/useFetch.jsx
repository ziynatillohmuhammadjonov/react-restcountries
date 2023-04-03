import { useEffect, useState } from "react";
function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [mainData, setMainData] = useState([]);

  // filter
  const [filter, setFilter] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          // console.log(req.status);
          // console.log(req.statusText);
          throw new Error({ status: req.status, text: req.statusText });
        }
        const mal = await req.json();
        setIsPending(false);
        setMainData(mal);
        setData(mal);
      } catch (err) {
        setIsPending(false);
        setError(err.message);
      }
    };
    fetchData();
  }, [url]);
  // enter Country
  function enterCountry() {
    if (filter) {
      if (region) {
        if (region !== "all") {
          const userCountry = filter.toLowerCase();
          const newArr = mainData.filter((cr) => {
            return (
              cr.region.toLowerCase() === region &&
              cr.name.common.toLowerCase().includes(userCountry)
            );
          });
          setData(newArr);
        } else {
          const userCountry = filter.toLowerCase();
          const newArr = mainData.filter((cr) => {
            return cr.name.common.toLowerCase().includes(userCountry);
          });
          setData(newArr);
        }
      }
      const userCountry = filter.toLowerCase();
      const newArr = mainData.filter((cr) => {
        return cr.name.common.toLowerCase().includes(userCountry);
      });
      setData(newArr);
    }
  }
  useEffect(() => {
    enterCountry();
  }, [filter]);
  // setRegion
  function userRegion() {
    if (region !== "all") {
      const newArr = mainData.filter((cr) => {
        return cr.region.toLowerCase() === region;
      });
      setData(newArr);
    } else {
      setData(mainData);
    }
  }
  useEffect(() => {
    userRegion();
  }, [region, url]);
  return { data, error, isPending, setFilter, setRegion };
}

export default useFetch;
