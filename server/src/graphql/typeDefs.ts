import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Book {
    _id: ID!
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
    addBook(title: String!, author: String!): Book!
    addUser(username: String!, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }
`;