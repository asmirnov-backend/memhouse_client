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
  DateTime: any;
};

export type GetMemsInput = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type ImageDto = {
  __typename?: 'ImageDto';
  createdAt: Scalars['DateTime'];
  displayUrl: Scalars['String'];
  height: Scalars['Int'];
  id: Scalars['String'];
  memId?: Maybe<Scalars['String']>;
  size: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  width: Scalars['Int'];
};

export type JwtToken = {
  __typename?: 'JwtToken';
  jwtToken: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MemCreateInput = {
  imgsBuffers: Array<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  text?: InputMaybe<Scalars['String']>;
};

export type MemDto = {
  __typename?: 'MemDto';
  createdAt: Scalars['DateTime'];
  createdUserId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type MemFullDto = {
  __typename?: 'MemFullDto';
  createdAt: Scalars['DateTime'];
  createdUserId?: Maybe<Scalars['String']>;
  dislikes: Scalars['Int'];
  id: Scalars['String'];
  images: Array<ImageDto>;
  isCurrentUserHasSetLike: Scalars['Boolean'];
  likes: Scalars['Int'];
  rating?: Maybe<Scalars['Float']>;
  tags: Array<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type MemUpdateInput = {
  id: Scalars['String'];
  tags?: InputMaybe<Array<Scalars['String']>>;
  text?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMem: MemFullDto;
  login: JwtToken;
  registration: JwtToken;
  toggleLike: ToggleLikeOutputDto;
  updateMem: MemFullDto;
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

export type MutationToggleLikeArgs = {
  ToggleLikeInputDto: ToggleLikeInputDto;
};

export type MutationUpdateMemArgs = {
  UpdateMemInput: MemUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  bestMems: Array<MemFullDto>;
  me: UserDto;
  mems: Array<MemFullDto>;
  userById: UserDto;
};

export type QueryBestMemsArgs = {
  GetMemsInput: GetMemsInput;
};

export type QueryMemsArgs = {
  GetMemsInput: GetMemsInput;
};

export type QueryUserByIdArgs = {
  UserByIdInput: UserByIdInput;
};

export type RegistrationInput = {
  birthday?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  surname: Scalars['String'];
};

export type ToggleLikeInputDto = {
  memId: Scalars['String'];
};

export type ToggleLikeOutputDto = {
  __typename?: 'ToggleLikeOutputDto';
  likes: Scalars['Int'];
};

export type UserByIdInput = {
  id: Scalars['String'];
};

export type UserDto = {
  __typename?: 'UserDto';
  birthday?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  createdMems: Array<MemDto>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  surname: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  viewedMemes: Array<MemDto>;
};

export type ToggleLikeMutationVariables = Exact<{
  memId: Scalars['String'];
}>;

export type ToggleLikeMutation = {
  __typename?: 'Mutation';
  toggleLike: { __typename?: 'ToggleLikeOutputDto'; likes: number };
};

export type CreateMemMutationVariables = Exact<{
  text?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  imgsBuffers: Array<Scalars['String']> | Scalars['String'];
}>;

export type CreateMemMutation = {
  __typename?: 'Mutation';
  createMem: { __typename?: 'MemFullDto'; id: string };
};

export type ProfileQueryVariables = Exact<{ [key: string]: never }>;

export type ProfileQuery = {
  __typename?: 'Query';
  me: {
    __typename?: 'UserDto';
    email: string;
    nickname: string;
    name: string;
    surname: string;
    birthday?: any | null;
  };
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: { __typename?: 'JwtToken'; jwtToken: string };
};

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  nickname: Scalars['String'];
  name: Scalars['String'];
  surname: Scalars['String'];
  birthday?: InputMaybe<Scalars['String']>;
}>;

export type SignUpMutation = {
  __typename?: 'Mutation';
  registration: { __typename?: 'JwtToken'; jwtToken: string };
};

export type GetBestMemsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;

export type GetBestMemsQuery = {
  __typename?: 'Query';
  bestMems: Array<{
    __typename?: 'MemFullDto';
    id: string;
    likes: number;
    rating?: number | null;
    text?: string | null;
    images: Array<{ __typename?: 'ImageDto'; title: string; displayUrl: string }>;
  }>;
};

export type GetMemsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;

export type GetMemsQuery = {
  __typename?: 'Query';
  mems: Array<{
    __typename?: 'MemFullDto';
    id: string;
    likes: number;
    dislikes: number;
    rating?: number | null;
    text?: string | null;
    tags: Array<string>;
    isCurrentUserHasSetLike: boolean;
    images: Array<{ __typename?: 'ImageDto'; title: string; displayUrl: string }>;
  }>;
};

export const ToggleLikeDocument = gql`
  mutation ToggleLike($memId: String!) {
    toggleLike(ToggleLikeInputDto: { memId: $memId }) {
      likes
    }
  }
`;
export type ToggleLikeMutationFn = Apollo.MutationFunction<
  ToggleLikeMutation,
  ToggleLikeMutationVariables
>;

/**
 * __useToggleLikeMutation__
 *
 * To run a mutation, you first call `useToggleLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleLikeMutation, { data, loading, error }] = useToggleLikeMutation({
 *   variables: {
 *      memId: // value for 'memId'
 *   },
 * });
 */
export function useToggleLikeMutation(
  baseOptions?: Apollo.MutationHookOptions<ToggleLikeMutation, ToggleLikeMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ToggleLikeMutation, ToggleLikeMutationVariables>(
    ToggleLikeDocument,
    options,
  );
}
export type ToggleLikeMutationHookResult = ReturnType<typeof useToggleLikeMutation>;
export type ToggleLikeMutationResult = Apollo.MutationResult<ToggleLikeMutation>;
export type ToggleLikeMutationOptions = Apollo.BaseMutationOptions<
  ToggleLikeMutation,
  ToggleLikeMutationVariables
>;
export const CreateMemDocument = gql`
  mutation CreateMem($text: String, $tags: [String!], $imgsBuffers: [String!]!) {
    createMem(CreateMemInput: { text: $text, tags: $tags, imgsBuffers: $imgsBuffers }) {
      id
    }
  }
`;
export type CreateMemMutationFn = Apollo.MutationFunction<
  CreateMemMutation,
  CreateMemMutationVariables
>;

/**
 * __useCreateMemMutation__
 *
 * To run a mutation, you first call `useCreateMemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMemMutation, { data, loading, error }] = useCreateMemMutation({
 *   variables: {
 *      text: // value for 'text'
 *      tags: // value for 'tags'
 *      imgsBuffers: // value for 'imgsBuffers'
 *   },
 * });
 */
export function useCreateMemMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateMemMutation, CreateMemMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateMemMutation, CreateMemMutationVariables>(
    CreateMemDocument,
    options,
  );
}
export type CreateMemMutationHookResult = ReturnType<typeof useCreateMemMutation>;
export type CreateMemMutationResult = Apollo.MutationResult<CreateMemMutation>;
export type CreateMemMutationOptions = Apollo.BaseMutationOptions<
  CreateMemMutation,
  CreateMemMutationVariables
>;
export const ProfileDocument = gql`
  query Profile {
    me {
      email
      nickname
      name
      surname
      birthday
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
export const SignUpDocument = gql`
  mutation SignUp(
    $email: String!
    $password: String!
    $nickname: String!
    $name: String!
    $surname: String!
    $birthday: String
  ) {
    registration(
      RegistrationInput: {
        email: $email
        password: $password
        nickname: $nickname
        name: $name
        surname: $surname
        birthday: $birthday
      }
    ) {
      jwtToken
    }
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      nickname: // value for 'nickname'
 *      name: // value for 'name'
 *      surname: // value for 'surname'
 *      birthday: // value for 'birthday'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
export const GetBestMemsDocument = gql`
  query GetBestMems($offset: Int = 0, $limit: Int = 3) {
    bestMems(GetMemsInput: { take: $limit, skip: $offset }) {
      id
      likes
      rating
      text
      images {
        title
        displayUrl
      }
    }
  }
`;

/**
 * __useGetBestMemsQuery__
 *
 * To run a query within a React component, call `useGetBestMemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBestMemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBestMemsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetBestMemsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetBestMemsQuery, GetBestMemsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBestMemsQuery, GetBestMemsQueryVariables>(GetBestMemsDocument, options);
}
export function useGetBestMemsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetBestMemsQuery, GetBestMemsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBestMemsQuery, GetBestMemsQueryVariables>(
    GetBestMemsDocument,
    options,
  );
}
export type GetBestMemsQueryHookResult = ReturnType<typeof useGetBestMemsQuery>;
export type GetBestMemsLazyQueryHookResult = ReturnType<typeof useGetBestMemsLazyQuery>;
export type GetBestMemsQueryResult = Apollo.QueryResult<
  GetBestMemsQuery,
  GetBestMemsQueryVariables
>;
export const GetMemsDocument = gql`
  query GetMems($offset: Int = 0, $limit: Int = 3) {
    mems(GetMemsInput: { take: $limit, skip: $offset }) {
      id
      likes
      dislikes
      rating
      text
      images {
        title
        displayUrl
      }
      tags
      isCurrentUserHasSetLike
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
