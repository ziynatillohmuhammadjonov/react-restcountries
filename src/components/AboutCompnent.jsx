import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
function AboutCompnent({ data, isPending }) {
  const [mal, setMal] = useState(data);
  if (isPending) {
    return <Loader />;
  }

  useEffect(() => {
    if (data.length) {
      setMal(data[0]);
    }
  }, [data]);
  const {
    capital,
    name,
    population,
    subregion,
    region,
    flags,
    tld,
    borders,
    currencies,
    languages,
  } = mal;
  const nativeName = name && Object.values(name.nativeName)[0].official;
  const language = languages && Object.values(languages);
  const chegara = borders && Object.values(borders);
  const pulBirligi = currencies && Object.values(currencies)[0].name;

  return (
    <div className="px-10 py-6 flex justify-center  mx-auto items-start flex-col ">
      <div className="back-button-wrapper">
        <Link
          className="shadow-slate-800 shadow-2xl rounded-xl bg-white  dark:bg-slate-500 py-2 px-8 inline-flex items-center mb-8"
          to={"/"}
        >
          <svg
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-5 "
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.46 4.1 7.64 5.3 3.75 9.18H18.6v1.64H3.75l3.9 3.9-1.19 1.17L.57 10l5.9-5.9Z"
              fill="#111517"
            ></path>
          </svg>
          <span>Back</span>
        </Link>
      </div>
      <div className="mx-auto flex flex-wrap gap-8 justify-center">
        <img
          className="rounded-xl"
          src={flags && flags.svg}
          alt={flags && flags.alt ? flags.alt : "No alt"}
          width="560"
          height="400"
        />
        <div className="">
          <h2 className="text-4xl font-bold mb-6">{name && name.common}</h2>
          <ul className="mb-5">
            <li className="flex flex-col gap-2">
              <p className="font-bold">
                Native Name:
                <span className="font-thin ml-2">{name && nativeName}</span>
              </p>
              <p className="font-bold">
                Population:
                <span className="font-thin ml-2">
                  {population && population}
                </span>
              </p>
              <p className="font-bold">
                Region:
                <span className="font-thin ml-2">{region && region}</span>
              </p>
              <p className="font-bold">
                Sub Region:
                <span className="font-thin ml-2">{subregion && subregion}</span>
              </p>
              <p className="font-bold">
                Capital:
                <span className="font-thin ml-2">{capital && capital}</span>
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <p className="font-bold">
                Top Level Domain:
                <span className="font-thin ml-2">{tld && tld}</span>
              </p>
              <p className="font-bold">
                Currencies:
                <span className="font-thin ml-2">{pulBirligi}</span>
              </p>
              <p className="font-bold">
                Languages:
                {language &&
                  language.map((ln, i) => {
                    return (
                      <span className="font-thin ml-2" key={i}>
                        {ln}
                      </span>
                    );
                  })}
              </p>
            </li>
          </ul>
          <div className="flex gap-3 items-center flex-wrap">
            <h3 className="font-bold mr-3">Border Countries:</h3>
            {!chegara && (
              <div className="shadow-slate-800 shadow-inner rounded-xl dark:bg-slate-400 bg-white  py-1 px-6 font-bold">
                No border
              </div>
            )}
            {chegara &&
              chegara.map((dav, i) => {
                return (
                  <Link
                    key={i}
                    to={`/about/${dav}`}
                    className="shadow-slate-800 shadow-inner rounded-xl dark:bg-slate-400 bg-white  py-1 px-6 font-bold"
                  >
                    {dav}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCompnent;
