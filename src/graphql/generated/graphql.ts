import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Continent = {
  __typename?: 'Continent';
  code: Scalars['ID']['output'];
  countries: Array<Country>;
  name: Scalars['String']['output'];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
  __typename?: 'Country';
  awsRegion: Scalars['String']['output'];
  capital?: Maybe<Scalars['String']['output']>;
  code: Scalars['ID']['output'];
  continent: Continent;
  currencies: Array<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  emoji: Scalars['String']['output'];
  emojiU: Scalars['String']['output'];
  languages: Array<Language>;
  name: Scalars['String']['output'];
  native: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  phones: Array<Scalars['String']['output']>;
  states: Array<State>;
  subdivisions: Array<Subdivision>;
};


export type CountryNameArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  native: Scalars['String']['output'];
  rtl: Scalars['Boolean']['output'];
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Query = {
  __typename?: 'Query';
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
};


export type QueryContinentArgs = {
  code: Scalars['ID']['input'];
};


export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};


export type QueryCountryArgs = {
  code: Scalars['ID']['input'];
};


export type QueryLanguageArgs = {
  code: Scalars['ID']['input'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']['output']>;
  country: Country;
  name: Scalars['String']['output'];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type Subdivision = {
  __typename?: 'Subdivision';
  code: Scalars['ID']['output'];
  emoji?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type ContinentQueryVariables = Exact<{ [key: string]: never; }>;


export type ContinentQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', code: string, name: string, countries: Array<{ __typename?: 'Country', code: string, currency?: string | null, name: string, phone: string, languages: Array<{ __typename?: 'Language', name: string }> }> }> };

export type ContinentByCodeQueryVariables = Exact<{
  code: Scalars['ID']['input'];
}>;


export type ContinentByCodeQuery = { __typename?: 'Query', continent?: { __typename?: 'Continent', code: string, name: string, countries: Array<{ __typename?: 'Country', name: string, languages: Array<{ __typename?: 'Language', name: string }> }> } | null };

export type CountriesQueryVariables = Exact<{
  filter?: InputMaybe<CountryFilterInput>;
}>;


export type CountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', code: string, name: string, currency?: string | null, capital?: string | null, languages: Array<{ __typename?: 'Language', name: string }>, continent: { __typename?: 'Continent', name: string, code: string } }> };

export type CountryQueryVariables = Exact<{
  code: Scalars['ID']['input'];
}>;


export type CountryQuery = { __typename?: 'Query', country?: { __typename?: 'Country', code: string, currency?: string | null, emoji: string, emojiU: string, name: string, phone: string, languages: Array<{ __typename?: 'Language', code: string, name: string, native: string, rtl: boolean }>, continent: { __typename?: 'Continent', code: string, name: string }, states: Array<{ __typename?: 'State', code?: string | null, name: string }> } | null };


export const ContinentDocument = gql`
    query Continent {
  continents {
    code
    name
    countries {
      code
      currency
      name
      phone
      languages {
        name
      }
    }
  }
}
    `;

/**
 * __useContinentQuery__
 *
 * To run a query within a React component, call `useContinentQuery` and pass it any options that fit your needs.
 * When your component renders, `useContinentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContinentQuery({
 *   variables: {
 *   },
 * });
 */
export function useContinentQuery(baseOptions?: Apollo.QueryHookOptions<ContinentQuery, ContinentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContinentQuery, ContinentQueryVariables>(ContinentDocument, options);
      }
export function useContinentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContinentQuery, ContinentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContinentQuery, ContinentQueryVariables>(ContinentDocument, options);
        }
export function useContinentSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ContinentQuery, ContinentQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ContinentQuery, ContinentQueryVariables>(ContinentDocument, options);
        }
export type ContinentQueryHookResult = ReturnType<typeof useContinentQuery>;
export type ContinentLazyQueryHookResult = ReturnType<typeof useContinentLazyQuery>;
export type ContinentSuspenseQueryHookResult = ReturnType<typeof useContinentSuspenseQuery>;
export type ContinentQueryResult = Apollo.QueryResult<ContinentQuery, ContinentQueryVariables>;
export const ContinentByCodeDocument = gql`
    query ContinentByCode($code: ID!) {
  continent(code: $code) {
    code
    name
    countries {
      name
      languages {
        name
      }
    }
  }
}
    `;

/**
 * __useContinentByCodeQuery__
 *
 * To run a query within a React component, call `useContinentByCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useContinentByCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContinentByCodeQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useContinentByCodeQuery(baseOptions: Apollo.QueryHookOptions<ContinentByCodeQuery, ContinentByCodeQueryVariables> & ({ variables: ContinentByCodeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContinentByCodeQuery, ContinentByCodeQueryVariables>(ContinentByCodeDocument, options);
      }
export function useContinentByCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContinentByCodeQuery, ContinentByCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContinentByCodeQuery, ContinentByCodeQueryVariables>(ContinentByCodeDocument, options);
        }
export function useContinentByCodeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ContinentByCodeQuery, ContinentByCodeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ContinentByCodeQuery, ContinentByCodeQueryVariables>(ContinentByCodeDocument, options);
        }
export type ContinentByCodeQueryHookResult = ReturnType<typeof useContinentByCodeQuery>;
export type ContinentByCodeLazyQueryHookResult = ReturnType<typeof useContinentByCodeLazyQuery>;
export type ContinentByCodeSuspenseQueryHookResult = ReturnType<typeof useContinentByCodeSuspenseQuery>;
export type ContinentByCodeQueryResult = Apollo.QueryResult<ContinentByCodeQuery, ContinentByCodeQueryVariables>;
export const CountriesDocument = gql`
    query Countries($filter: CountryFilterInput) {
  countries(filter: $filter) {
    code
    name
    languages {
      name
    }
    continent {
      name
      code
    }
    currency
    capital
  }
}
    `;

/**
 * __useCountriesQuery__
 *
 * To run a query within a React component, call `useCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountriesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useCountriesQuery(baseOptions?: Apollo.QueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, options);
      }
export function useCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, options);
        }
export function useCountriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, options);
        }
export type CountriesQueryHookResult = ReturnType<typeof useCountriesQuery>;
export type CountriesLazyQueryHookResult = ReturnType<typeof useCountriesLazyQuery>;
export type CountriesSuspenseQueryHookResult = ReturnType<typeof useCountriesSuspenseQuery>;
export type CountriesQueryResult = Apollo.QueryResult<CountriesQuery, CountriesQueryVariables>;
export const CountryDocument = gql`
    query Country($code: ID!) {
  country(code: $code) {
    code
    currency
    emoji
    emojiU
    languages {
      code
      name
      native
      rtl
    }
    name
    continent {
      code
      name
    }
    phone
    states {
      code
      name
    }
  }
}
    `;

/**
 * __useCountryQuery__
 *
 * To run a query within a React component, call `useCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useCountryQuery(baseOptions: Apollo.QueryHookOptions<CountryQuery, CountryQueryVariables> & ({ variables: CountryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountryQuery, CountryQueryVariables>(CountryDocument, options);
      }
export function useCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountryQuery, CountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountryQuery, CountryQueryVariables>(CountryDocument, options);
        }
export function useCountrySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CountryQuery, CountryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CountryQuery, CountryQueryVariables>(CountryDocument, options);
        }
export type CountryQueryHookResult = ReturnType<typeof useCountryQuery>;
export type CountryLazyQueryHookResult = ReturnType<typeof useCountryLazyQuery>;
export type CountrySuspenseQueryHookResult = ReturnType<typeof useCountrySuspenseQuery>;
export type CountryQueryResult = Apollo.QueryResult<CountryQuery, CountryQueryVariables>;