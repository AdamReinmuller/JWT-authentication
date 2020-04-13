import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
   __typename?: 'Query';
  amILoggedIn: Scalars['String'];
  getAllUsers: Array<User>;
  getHiText: Scalars['String'];
};

export type User = {
   __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  registerUser: Scalars['Boolean'];
  loginUser: LoginResponse;
};


export type MutationRegisterUserArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationLoginUserArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};

export type LoginResponse = {
   __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type GetHiTextQueryVariables = {};


export type GetHiTextQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getHiText'>
);


export const GetHiTextDocument = gql`
    query getHiText {
  getHiText
}
    `;

/**
 * __useGetHiTextQuery__
 *
 * To run a query within a React component, call `useGetHiTextQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHiTextQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHiTextQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHiTextQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetHiTextQuery, GetHiTextQueryVariables>) {
        return ApolloReactHooks.useQuery<GetHiTextQuery, GetHiTextQueryVariables>(GetHiTextDocument, baseOptions);
      }
export function useGetHiTextLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetHiTextQuery, GetHiTextQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetHiTextQuery, GetHiTextQueryVariables>(GetHiTextDocument, baseOptions);
        }
export type GetHiTextQueryHookResult = ReturnType<typeof useGetHiTextQuery>;
export type GetHiTextLazyQueryHookResult = ReturnType<typeof useGetHiTextLazyQuery>;
export type GetHiTextQueryResult = ApolloReactCommon.QueryResult<GetHiTextQuery, GetHiTextQueryVariables>;