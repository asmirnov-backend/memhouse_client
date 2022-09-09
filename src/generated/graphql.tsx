import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GetMemsInput = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type JwtToken = {
  __typename?: 'JwtToken';
  jwtToken: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mem = {
  __typename?: 'Mem';
  dislikes: Scalars['Int'];
  id: Scalars['String'];
  imgUrls: Array<Scalars['String']>;
  likes: Scalars['Int'];
  rating: Scalars['Float'];
  tags?: Maybe<Array<Scalars['String']>>;
  text?: Maybe<Scalars['String']>;
};

export type MemCreateInput = {
  imgUrls: Array<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  text?: InputMaybe<Scalars['String']>;
};

export type MemUpdateInput = {
  addDislikes?: InputMaybe<Scalars['Float']>;
  addLikes?: InputMaybe<Scalars['Float']>;
  id: Scalars['String'];
  imgUrls?: InputMaybe<Array<Scalars['String']>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  text?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMem: Mem;
  login: JwtToken;
  registration: JwtToken;
  updateMem: Mem;
};

export type MutationCreateMemArgs = {
  CreateMemInput: MemCreateInput;
};

export type MutationLoginArgs = {
  LoginInput: LoginInput;
};

export type MutationRegistrationArgs = {
  RegistrationInput: RegistrationInput;
};

export type MutationUpdateMemArgs = {
  UpdateMemInput: MemUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  bestMems: Array<Mem>;
  me: User;
  mems: Array<Mem>;
  user: User;
};

export type QueryBestMemsArgs = {
  GetMemsInput: GetMemsInput;
};

export type QueryMemsArgs = {
  GetMemsInput: GetMemsInput;
};

export type QueryUserArgs = {
  UserUniqueInput: UserUniqueInput;
};

export type RegistrationInput = {
  email: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdMems: Array<Mem>;
  email: Scalars['String'];
  id: Scalars['String'];
  nickname: Scalars['String'];
  viewedMemes: Array<Mem>;
};

export type UserUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
};

export type GetMemsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;

export type GetMemsQuery = {
  __typename?: 'Query';
  mems: Array<{
    __typename?: 'Mem';
    id: string;
    likes: number;
    rating: number;
    imgUrls: Array<string>;
    text?: string | null;
  }>;
};

export type ProfileQueryVariables = Exact<{ [key: string]: never }>;

export type ProfileQuery = {
  __typename?: 'Query';
  me: { __typename?: 'User'; email: string; nickname: string };
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: { __typename?: 'JwtToken'; jwtToken: string };
};

export const GetMemsDocument = gql`
  query GetMems($offset: Int = 0, $limit: Int = 3) {
    mems(GetMemsInput: { take: $limit, skip: $offset }) {
      id
      likes
      rating
      imgUrls
      text
    }
  }
`;

/**
 * __useGetMemsQuery__
 *
 * To run a query within a React component, call `useGetMemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetMemsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMemsQuery, GetMemsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMemsQuery, GetMemsQueryVariables>(GetMemsDocument, options);
}
export function useGetMemsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMemsQuery, GetMemsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMemsQuery, GetMemsQueryVariables>(GetMemsDocument, options);
}
export type GetMemsQueryHookResult = ReturnType<typeof useGetMemsQuery>;
export type GetMemsLazyQueryHookResult = ReturnType<typeof useGetMemsLazyQuery>;
export type GetMemsQueryResult = Apollo.QueryResult<GetMemsQuery, GetMemsQueryVariables>;
export const ProfileDocument = gql`
  query Profile {
    me {
      email
      nickname
    }
  }
`;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
}
export function useProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
}
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(LoginInput: { email: $email, password: $password }) {
      jwtToken
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
