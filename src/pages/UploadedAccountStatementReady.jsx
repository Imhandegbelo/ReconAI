/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import data from "../data/mockdata.json";

const UploadedAccountStatementReady = () => {
  const [contacts, setContacts] = useState(data);
  const [query, setQuery] = useState("");
  const [display, setDisplay] = useState("");
  const [sortBy, setSortBy] = useState("");

  const displayOptions = ["All", "Recent Transactions", "Date", "Amount"];

  const handleQuery = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };
  return (
    <div className="m-8 font-lexend">
      <div className="inline px-2 py-8 ml-2">
        <div className="left-0 h-10 top-9">
          <h2 className="h-10 text-xl font-semibold md:text-2xl lg:text-5xl font-Lexend">
            Uploaded Account Statement Ready!
          </h2>
        </div>
        <div className="flex flex-col gap-4 py-4 mt-3">
          <div className="flex flex-col gap-6 md:flex-row justify-between w-full mt-5">
            <div className="flex items-center">
              <label
                htmlFor="display"
                className="mr-2 text-base font-medium text-borderB font-Lexend"
              >
                Display
              </label>
              <select
                id="display"
                onChange={(e) => setDisplay(e.target.value)}
                className="border border-[#939393] rounded-lg p-2 w-80 h-9 mr-2 text-base font-medium"
              >
                {displayOptions.map((opt) => (
                  <option
                    className="w-96 h-20 bg bg-[#EFF8FF] bg-opacity-30 font-Lexend font-normal text-lg leading-10 text"
                    value={opt}
                  >
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="sort"
                className="mr-2 text-base font-medium text-borderB font-Lexend"
              >
                Sort by:
              </label>
              <select
                id="sort"
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-[#939393] p-2 w-48 h-9 mr-2 font-medium overflow-hidden rounded-lg"
              >
                {displayOptions.map((opt) => (
                  <option
                    className="w-96 h-20 bg bg-[#EFF8FF] bg-opacity-30 text-lg leading-10"
                    value={opt}
                  >
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row items-center justify-between">
            <p className="py-5 text-base font-semibold text-left sm:text-sm whitespace-nowrap md:text-lg lg:text-xl h-14 top-2 font-lexend ">
              Recent Transactions
            </p>

            <div className="flex justify-between w-48 sm:w-fit md:w-fit lg:w-fit ">
              <form className="w-full max-w-md" action="">
                <div className="relative flex items-center text-gray-700 ">
                  <FaSearch className="absolute w-5 h-5 ml-3" />
                  {/* <label htmlFor="query">Sort by:</label> */}
                  <input
                    type="search"
                    value={query}
                    placeholder="search"
                    aria-label="search record"
                    onChange={handleQuery}
                    className="w-full py-3 pl-10 pr-3 font-light text-black h-11 placeholder-search rounded-xl "
                  />
                </div>
              </form>
            </div>
          </div>

          <table className="w-full table-auto bg-searchBar rounded-xl">
            <thead>
              <tr className="py-6 bg-thead w-80">
                <th className="h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80">
                  Name
                </th>
                <th className="h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80">
                  Description
                </th>
                <th className="h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80">
                  Withdrawals
                </th>
                <th className="h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80">
                  Deposits
                </th>
                <th className="h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80">
                  Date
                </th>
                <th className="h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr className="border-b border-b-search border-opacity-20 ">
                  <td className="py-6 pl-4 text-sm font-normal leading-5 text-left border-spacing-2 w-80 font-Lexend">
                    {contact.Name}
                  </td>
                  <td className="py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend">
                    {contact.Description}
                  </td>
                  <td className="py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend text-withdraw">
                    {contact.Withdrawals}
                  </td>
                  <td className="py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend text-deposit">
                    {contact.Deposits}
                  </td>
                  <td className="py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend">
                    {contact.Date}
                  </td>
                  <td className="py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend">
                    {contact.Balance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="w-[327px] h-10 lg:w-[556px] lg:h-[50px] text-white font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 focus:focus-ring"
          >
            Reconcile
          </button>
        </div>
      </div>
    </div>
  );
};
export default UploadedAccountStatementReady;
