import "reflect-metadata";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { CoinsResolver } from "./resolvers/coins";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { MongoClient } from "mongodb";
import { Context } from "../types";
import { LevelResolver } from "./resolvers/level";
import { StudyResolver } from "./resolvers/study";

dotenv.config();

const main = async () => {
  const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xwiby.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  const client = new MongoClient(url);

  await client.connect();

  const db = client.db(process.env.DB_NAME);
  const app = express();

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  const apolloServer = new ApolloServer({
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({
        // options
      }),
    ],
    schema: await buildSchema({
      resolvers: [CoinsResolver, LevelResolver, StudyResolver],
      validate: false,
    }),

    context: (): Context => ({
      db,
    }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(7000, () => {
    console.log(`App running on localhost:7000`);
  });
};

main().catch(console.error);
