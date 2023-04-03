import { useState } from "react";
import useFetch from "../hooks/useFetch";

function Filter({ setFilter, setRegion }) {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setQuery("");
  };
  const {} = useFetch();

  return (
    <div className="dark:bg-slate-700 max-w-4xl mx-auto px-10 py-3 flex items-center justify-between">
      <form
        className=" relative md:w-80 rounded-lg flex items-start justify-center"
        onSubmit={handleChange}
      >
        <div className="flex justify-center ">
          <div className="">
            <div className="relative  flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="font-bold  dark:bg-slate-500 dark:border-blue-400 bg-white relative m-0 -mr-px block md:w-52   sm: w-40 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding pl-2 py-1.5 text-base  text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                placeholder="Search"
                onChange={(e) => {
                  setQuery(e.target.value);
                  setFilter(query);
                }}
                value={query}
              />
              <button
                className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="flex justify-center">
        <div className=" mb-3 xl:w-60 flex justify-end ">
          <select
            data-te-select-init
            className="xl:w-96 md:w-64 h-10 px-2 py-1 rounded-lg dark:text-white font-bold dark:bg-slate-500 dark:border-blue-400"
            onChange={(e) => {
              setRegion(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="americas">Americas</option>
            <option value="africa">Africa</option>
            <option value="oceania">Oceania</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
            <option value="antarctic">Antarctic</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
