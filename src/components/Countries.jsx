import { Link } from "react-router-dom";

function Countries({ data }) {
  return (
    <div className=" max-w-4xl mx-auto px-10 py-6 grid md:grid-cols-3 gap-8 sm:grid-cols-2 content-center justify-items-center dark:bg-slate-700">
      {data &&
        data.map((item) => {
          const {
            capital,
            population,
            flags: { svg },
            name: { common },
            region,
            cca2: code,
          } = item;
          return (
            <Link to={`/about/${code}`} key={code}>
              <div className="hover:shadow-2xl dark:hover:shadow-slate-500 w-60 bg-slate-50 shadow-lg rounded-xl dark:bg-slate-400 dark:text-white">
                <img
                  src={svg}
                  className="rounded-xl w-60 border-2 border-slate-500 h-32 mb-3"
                />
                <div className="card-body p-3">
                  <h5 className="text-lg mb-4 font-bold">{common}</h5>
                  <p>
                    <b>Population: {population}</b>
                  </p>
                  <p>
                    <b>Region: {region}</b>
                  </p>
                  <p>
                    <b>Capital: {capital ? capital : "No Capital"}</b>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default Countries;
