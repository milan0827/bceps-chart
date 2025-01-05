import {
  CountryDocument,
  CountryQuery,
  CountryQueryVariables,
} from "@/graphql/generated/graphql";
import apolloClient from "../../../../apollo-client";
import Loading from "@/components/Loading/Loading";
import {
  LongDescription,
  ShortDescription,
} from "@/components/description/Description";
import ErrorText from "@/components/ErrorText/ErrorText";

const CountryDetail = async ({
  params,
}: {
  params: Promise<{ code: string }>;
}) => {
  const { code } = await params;
  const {
    data: country,
    loading,
    error,
  } = await apolloClient.query<CountryQuery, CountryQueryVariables>({
    query: CountryDocument,
    variables: {
      code: code,
    },
  });

  if (error) if (error) return <ErrorText />;

  if (loading) return <Loading />;
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-8">
      <h1 className="text-2xl items-center text-gray-100 flex justify-center font-semibold">
        Detail about country {country?.country?.name}{" "}
      </h1>
      <ul className=" flex-col flex justify-center items-start gap-8">
        <ShortDescription
          ShortDescription={country.country?.code as string}
          title="Code"
        />
        <ShortDescription
          ShortDescription={country.country?.continent.name as string}
          title="Continent"
        />
        <ShortDescription
          ShortDescription={country.country?.currency as string}
          title="Currency"
        />
        <ShortDescription
          ShortDescription={country.country?.emoji as string}
          title="Flag"
        />
        <ShortDescription
          ShortDescription={country.country?.phone as string}
          title="Phone Code"
        />

        <LongDescription
          title="List of Currencies"
          list={country.country?.languages}
          render={(lang, i: number) => (
            <p key={i} className="text-gray-400">
              {i + 1}
              {". "} {lang.name}
            </p>
          )}
        />

        <LongDescription
          title="List of States"
          list={country.country?.states}
          render={(state, i: number) => (
            <p key={i} className="text-gray-400">
              {i + 1}
              {". "} {state.name}
            </p>
          )}
        />
      </ul>
    </div>
  );
};

export default CountryDetail;
