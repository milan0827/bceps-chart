import {
  ContinentByCodeDocument,
  ContinentByCodeQuery,
  ContinentByCodeQueryVariables,
} from "@/graphql/generated/graphql";
import apolloClient from "../../../../apollo-client";
import {
  LongDescription,
  ShortDescription,
} from "@/components/description/Description";
import ErrorText from "@/components/ErrorText/ErrorText";
import Loading from "@/components/Loading/Loading";

const page = async ({ params }: { params: Promise<{ code: string }> }) => {
  const { code } = await params;
  const {
    data: continent,
    loading,
    error,
  } = await apolloClient.query<
    ContinentByCodeQuery,
    ContinentByCodeQueryVariables
  >({
    query: ContinentByCodeDocument,
    variables: {
      code: code,
    },
  });

  if (error) return <ErrorText />;

  if (loading) return <Loading />;

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-8">
      <h1 className="text-2xl items-center text-gray-100 flex justify-center font-semibold">
        Detail about Continent {continent?.continent?.name}{" "}
      </h1>

      <ul className=" flex-col flex justify-center items-start gap-8">
        <ShortDescription
          ShortDescription={continent.continent?.code as string}
          title="Code"
        />
        <ShortDescription
          ShortDescription={String(continent.continent?.countries?.length)}
          title={`Total No. of countries in ${continent?.continent?.name}`}
        />

        <LongDescription
          title="List of Currencies"
          list={continent.continent?.countries}
          render={(country, i: number) => (
            <p key={i} className="text-gray-400">
              {i + 1}
              {". "} {country.name}
            </p>
          )}
        />
      </ul>
    </div>
  );
};

export default page;
