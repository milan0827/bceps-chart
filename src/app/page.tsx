import ContinentBarGraph from "@/components/continent-graph/ContinentBarGraph";
import ContinentPieChartCountry from "@/components/continent-graph/ContinentPieChartCountry";
import ContinentPieChartLanguage from "@/components/continent-graph/ContinentPieChartLanguage";
import Table from "@/components/table/Table";

export default async function page() {
  return (
    <main className="max-w-[1100px] mx-auto px-4 py-8">
      <h1 className="text-gray-100 text-2xl font-semibold">List of Country</h1>

      <div className="mt-8">
        <Table />
        <div className="w-full flex flex-col gap-2 mt-3 ">
          <h2 className="text-gray-300 text-2xl font-semibold">
            Continent, Total No. of Coutnries and languages spoken in each
            continent
          </h2>
          <ContinentBarGraph />
          <ContinentPieChartCountry />
          <ContinentPieChartLanguage />
        </div>
      </div>
    </main>
  );
}
