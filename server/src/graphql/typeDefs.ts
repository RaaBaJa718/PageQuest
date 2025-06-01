import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Book {
    _id: ID!
    title: String!
    author: String!
  }

  type SavedBook {
    bookId: String!
    title: String!
    authors: [String]
    description: String
    image: String
    link: String
  }

  type User {
    id: ID!
    username: String!
    email: String!
    savedBooks: [SavedBook!]!
    bookCount: Int!
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

  input BookInput {
    bookId: String!
    title: String!
    authors: [String]
    description: String
    image: String
    link: String
  }

  type Mutation {
    addBook(title: String!, author: String!): Book!
    addUser(username: String!, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    saveBook(bookData: BookInput!): User!
    # ...other mutations
  }
`;