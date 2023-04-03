import useFetch from "../hooks/useFetch";

// components
import Countries from "../components/Countries";
import Loader from "../components/Loader";
import PageNotFound from "../components/PageNotFound";
import Filter from "../components/Filter";

function Home() {
  const { data, error, isPending, setFilter, setRegion } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  if (isPending) {
    return <Loader />;
  }
  if (error.length) {
    return <PageNotFound error={error} />;
    console.log(error);
  }
  return (
    <div className="dark:bg-slate-700">
      <Filter setFilter={setFilter} setRegion={setRegion} />
      <Countries data={data} />
    </div>
  );
}

export default Home;
