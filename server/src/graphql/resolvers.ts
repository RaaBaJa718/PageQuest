import Book from '../models/Book.js';
import User from '../models/User.js';
import { signToken } from '../services/auth.js';

interface AddUserArgs {
  username: string;
  email: string;
  password: string;
}

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
    addUser: async (_parent: any, { username, email, password }: AddUserArgs) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user.username, user.email, user._id);
      return { token, user };
    },
    login: async (_parent: any, { email, password }: { email: string; password: string }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('No user found with this email address');
      }
      const valid = await user.isCorrectPassword(password);
      if (!valid) {
        throw new Error('Incorrect credentials');
      }
      const token = signToken(user.username, user.email, user._id);
      return { token, user };
    },
    saveBook: async (_parent: any, { bookData }: { bookData: any }, context: any) => {
      if (!context.user) throw new Error('Not authenticated');
      // Add the book to savedBooks if it doesn't already exist
      const updatedUser = await User.findByIdAndUpdate(
        context.user._id,
        { $addToSet: { savedBooks: bookData } },
        { new: true }
      );
      return updatedUser;
    },
  },
};

export default resolvers;