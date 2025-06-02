import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import db from './config/connection.js';
import routes from './routes/index.js';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers.js';
import { getUserFromToken } from './services/auth.js';
import cors from 'cors';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({
  origin: 'https://pagequest-1.onrender.com', // your frontend Render URL
  credentials: true,
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

// Connect to MongoDB before starting Apollo Server
db.once('open', async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT ? Number(process.env.PORT) : 4000 },
    context: async ({ req }) => {
      // Get the token from the headers
      const token = req.headers.authorization?.split(' ')[1];
      // Decode the token and get the user
      const user = token ? await getUserFromToken(token) : null;
      return { user };
    },
  });

  console.log(`🚀  Server ready at ${url}`);
});
