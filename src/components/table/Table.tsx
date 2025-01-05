"use client";

import { useEffect, useState } from "react";
import TableFooter from "../table-footer/TableFooter";
import TableHeader from "../table-header/TableHeader";
import TableBody from "../table-body/TableBody";
import Filter from "../Filter/Filter";
import { CountriesQuery, useCountriesQuery } from "@/graphql/generated/graphql";

const Table = () => {
  const [selectedOption, setSelectedOption] = useState<string>("all");
  const { data, loading, error } = useCountriesQuery({
    variables:
      selectedOption === "all"
        ? undefined
        : {
            filter: {
              continent: { eq: selectedOption },
            },
          },
  });

  const [startNo, setStartNo] = useState(0);
  const [endNo, setEndNo] = useState(10);
  const [pageData, setPageData] = useState<
    CountriesQuery["countries"] | undefined
  >(undefined);

  const handleNext = () => {
    setStartNo((i) => i + 10);
    setEndNo((i) => i + 10);
  };

  const handlePrevious = () => {
    setStartNo((i) => i - 10);
    setEndNo((i) => i - 10);
  };

  useEffect(() => {
    setPageData(data?.countries?.slice(startNo, endNo));
  }, [endNo, startNo, data?.countries]);

  if (error) {
    return <div className="text-red-500 text-2xl">Oops error occurred</div>;
  }

  return (
    <section className="max-w-[1000px] flex flex-col">
      <div className="flex justify-end gap-4">
        <p className="text-gray-300 text-sm">
          Select a continent to list out the country
        </p>
        <Filter
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className="overflow-x-auto ">
        <div className="w-full">
          <table className="text-white w-full border-collapse border border-gray-400 h-[495px]">
            <thead>
              <TableHeader />
            </thead>
            <tbody>
              {loading ? (
                <tr className="text-white text-2xl border border-gray-400">
                  <td
                    colSpan={100}
                    className="w-full h-full text-center justify-center "
                  >
                    Loading....
                  </td>
                </tr>
              ) : (
                pageData?.map((data: any, index: number) => (
                  <TableBody data={data} key={index} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <TableFooter
        endNo={endNo}
        startNo={startNo}
        onNext={handleNext}
        data={data as any}
        onPrevious={handlePrevious}
      />
    </section>
  );
};

export default Table;
