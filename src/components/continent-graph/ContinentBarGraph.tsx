import {
  ContinentDocument,
  ContinentQuery,
  ContinentQueryVariables,
} from "@/graphql/generated/graphql";
import apolloClient from "../../../apollo-client";
import CustomBarGraph from "../custom-bar-graph/CustomBarGraph";
import Loading from "../Loading/Loading";

const ContinentBarGraph = async () => {
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
    <div className="mt-4">
      <h2 className="text-gray-400 text-xl font-semibold ">
        Bar graph of continents with the country no. and language
      </h2>
      <CustomBarGraph
        data={continents}
        dataKey="name"
        bar1DataKey="countryCount"
        bar2DataKey="languageCount"
      />
    </div>
  );
};

export default ContinentBarGraph;
