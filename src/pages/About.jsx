import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
// components
import AboutCompnent from "../components/AboutCompnent";
import Loader from "../components/Loader";
import PageNotFound from "../components/PageNotFound";
function About() {
  const { code } = useParams();
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  const { data, error, isPending } = useFetch(url);
  if (isPending) {
    return <Loader />;
  }
  if (isPending) {
    <PageNotFound />;
  }
  return (
    <div>{data && <AboutCompnent data={data} isPending={isPending} />}</div>
  );
}

export default About;
