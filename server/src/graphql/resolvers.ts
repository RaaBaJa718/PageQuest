import Book from '../models/Book.js';
import User from '../models/User.js';

const resolvers = {
  Query: {
    me: async (_parent: any, _args: any, context: any) => {
      if (!context.user) throw new Error('Not authenticated');
      return User.findById(context.user._id);
    },
    books: async () => Book.find(),
    users: async () => User.find(),
  },
  Mutation: {
    addBook: async (_: any, { title, author }: { title: string; author: string }) =>
      Book.create({ title, author }),
    addUser: async (_: any, { username, email }: { username: string; email: string }) =>
      User.create({ username, email }),
  },
};

export default resolvers;