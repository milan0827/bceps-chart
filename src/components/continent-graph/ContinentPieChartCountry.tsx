import {
  ContinentDocument,
  ContinentQuery,
  ContinentQueryVariables,
} from "@/graphql/generated/graphql";
import Loading from "../Loading/Loading";
import CustomPieChart from "../custom-pie-chart/CustomPieChart";
import apolloClient from "../../../apollo-client";

const ContinentPieChartCountry = async () => {
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
  }));

  if (error) return <div>Oops!!! Error occurred while fetching data</div>;
  if (loading) return <Loading />;

  return (
    <div className="mt-6">
      <h2 className="text-gray-400 text-xl font-semibold">
        Pie chart of continents with total country no.
      </h2>
      <CustomPieChart data={continents} dataKey="countryCount" />
    </div>
  );
};

export default ContinentPieChartCountry;
