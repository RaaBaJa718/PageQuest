import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    me: User
    books: [Book!]!
    users: [User!]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): AuthPayload!
  }
`;