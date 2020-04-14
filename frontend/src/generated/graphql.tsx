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

export type LoginUserMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type LoginUserMutation = (
  { __typename?: 'Mutation' }
  & { loginUser: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
  ) }
);

export type RegisterUserMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type RegisterUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'registerUser'>
);

export type GetAllUsersQueryVariables = {};


export type GetAllUsersQuery = (
  { __typename?: 'Query' }
  & { getAllUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
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
export const LoginUserDocument = gql`
    mutation loginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    accessToken
  }
}
    `;
export type LoginUserMutationFn = ApolloReactCommon.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, baseOptions);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = ApolloReactCommon.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const RegisterUserDocument = gql`
    mutation registerUser($email: String!, $password: String!) {
  registerUser(email: $email, password: $password)
}
    `;
export type RegisterUserMutationFn = ApolloReactCommon.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, baseOptions);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = ApolloReactCommon.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const GetAllUsersDocument = gql`
    query getAllUsers {
  getAllUsers {
    id
    email
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, baseOptions);
      }
export function useGetAllUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, baseOptions);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = ApolloReactCommon.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;