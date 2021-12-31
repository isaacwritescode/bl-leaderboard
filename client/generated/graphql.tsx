import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CoinOwner = {
  user_ID: Scalars['Float'];
};

export type Coins = {
  __typename?: 'Coins';
  points: Scalars['Float'];
  user_ID: Scalars['Float'];
};

export type Identity = {
  user_ID: Scalars['Float'];
};

export type Level = {
  __typename?: 'Level';
  user_ID: Scalars['Float'];
  xp: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  allStudy: Array<Study>;
};


export type MutationAllStudyArgs = {
  options: Options;
};

export type Options = {
  sort: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allCoins: Array<Coins>;
  allLevel: Array<Level>;
  deleteData: Scalars['Boolean'];
  insertData: Scalars['Boolean'];
  myCoins: Coins;
  myLevel: Level;
};


export type QueryMyCoinsArgs = {
  options: CoinOwner;
};


export type QueryMyLevelArgs = {
  options: Identity;
};

export type Study = {
  __typename?: 'Study';
  daily: Scalars['Float'];
  monthly: Scalars['Float'];
  streak: Scalars['Float'];
  stream: Scalars['Float'];
  total: Scalars['Float'];
  user_ID: Scalars['Float'];
  video: Scalars['Float'];
  weekly: Scalars['Float'];
  yesterday: Scalars['Float'];
};

export type AllCoinsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCoinsQuery = { __typename?: 'Query', allCoins: Array<{ __typename?: 'Coins', user_ID: number, points: number }> };

export type AllLevelQueryVariables = Exact<{ [key: string]: never; }>;


export type AllLevelQuery = { __typename?: 'Query', allLevel: Array<{ __typename?: 'Level', user_ID: number, xp: number }> };

export type AllStudyMutationVariables = Exact<{
  sort: Scalars['String'];
}>;


export type AllStudyMutation = { __typename?: 'Mutation', allStudy: Array<{ __typename?: 'Study', user_ID: number, total: number, daily: number, yesterday: number, weekly: number, monthly: number, stream: number, video: number, streak: number }> };


export const AllCoinsDocument = gql`
    query AllCoins {
  allCoins {
    user_ID
    points
  }
}
    `;

export function useAllCoinsQuery(options: Omit<Urql.UseQueryArgs<AllCoinsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllCoinsQuery>({ query: AllCoinsDocument, ...options });
};
export const AllLevelDocument = gql`
    query AllLevel {
  allLevel {
    user_ID
    xp
  }
}
    `;

export function useAllLevelQuery(options: Omit<Urql.UseQueryArgs<AllLevelQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllLevelQuery>({ query: AllLevelDocument, ...options });
};
export const AllStudyDocument = gql`
    mutation AllStudy($sort: String!) {
  allStudy(options: {sort: $sort}) {
    user_ID
    total
    daily
    yesterday
    weekly
    monthly
    stream
    video
    streak
  }
}
    `;

export function useAllStudyMutation() {
  return Urql.useMutation<AllStudyMutation, AllStudyMutationVariables>(AllStudyDocument);
};