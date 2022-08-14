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
  registration: JwtToken;
  updateMem: Mem;
};

export type MutationCreateMemArgs = {
  CreateMemInput: MemCreateInput;
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
  login: JwtToken;
  me: User;
  mems: Array<Mem>;
  user: User;
};

export type QueryBestMemsArgs = {
  GetMemsInput: GetMemsInput;
};

export type QueryLoginArgs = {
  LoginInput: LoginInput;
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
  money: Scalars['Float'];
  nickname: Scalars['String'];
  viewedMemes: Array<Mem>;
};

export type UserUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
};

export type GetMemsQueryVariables = Exact<{ [key: string]: never }>;

export type GetMemsQuery = {
  __typename?: 'Query';
  mems: Array<{
    __typename?: 'Mem';
    id: string;
    likes: number;
    rating: number;
    imgUrls: Array<string>;
  }>;
};

export const GetMemsDocument = gql`
  query GetMems {
    mems(GetMemsInput: { take: 5 }) {
      id
      likes
      rating
      imgUrls
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
