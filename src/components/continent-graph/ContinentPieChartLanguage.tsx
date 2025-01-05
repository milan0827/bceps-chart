import {
  ContinentDocument,
  ContinentQuery,
  ContinentQueryVariables,
} from "@/graphql/generated/graphql";
import React from "react";
import apolloClient from "../../../apollo-client";
import Loading from "../Loading/Loading";
import CustomPieChart from "../custom-pie-chart/CustomPieChart";

const ContinentPieChartLanguage = async () => {
  const {
    data: continentData,
    error,
    loading,
  } = await apolloClient.query<ContinentQuery, ContinentQueryVariables>({
    query: ContinentDocument,
  });

  const continents = continentData?.continents?.map((continent) => ({
    name: continent.name,
    countryCount: continent.countries.length,
    code: continent.code,
    languageCount: continent.countries.reduce(
      (total, country) => total + country.languages.length,
      0
    ),
  }));

  if (error) return <div>Oops!!! Error occurred while fetching data</div>;
  if (loading) return <Loading />;
  return (
    <div className="mt-6">
      <h2 className="text-gray-400 text-xl font-semibold">
        Pie chart of continents with the total no. of language.
      </h2>
      <CustomPieChart data={continents} dataKey="languageCount" />
    </div>
  );
};

export default ContinentPieChartLanguage;
