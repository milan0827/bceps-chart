"use client";

import React, { SetStateAction } from "react";

interface FilterProps {
  selectedOption: string;
  setSelectedOption: React.Dispatch<SetStateAction<string>>;
}

const filterOptions = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Oceania",
    value: "OC",
  },
  {
    name: "Asia",
    value: "AS",
  },
  {
    name: "North America",
    value: "NA",
  },
  {
    name: "South America",
    value: "SA",
  },
  {
    name: "Europe",
    value: "EU",
  },
  {
    name: "Africa",
    value: "AF",
  },
  {
    name: "Antarctica",
    value: "AN",
  },
];

const Filter = ({ selectedOption, setSelectedOption }: FilterProps) => {
  return (
    <select
      onChange={(e) => setSelectedOption(e.target.value)}
      value={selectedOption}
      className="bg-gray-700 text-white self-start px-2 py-1 rounded-md"
    >
      {filterOptions.map((val) => (
        <option key={val.value} value={val.value}>
          {val.name}
        </option>
      ))}
    </select>
  );
};

export default Filter;
