import express, { Request, Response } from "express";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import http from "http";
import { typeDefs } from "./schema/typeDesf";
import { resolvers } from "./schema/Resolvers";
import bodyParser from "body-parser";

async function main() {
	const app = express();

	const httpServer = http.createServer(app);

	const server = new ApolloServer({
		typeDefs,
		resolvers,
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	});
	await server.start();
	app.use(
		"/",
		bodyParser.json(),
		// expressMiddleware accepts the same arguments:
		// an Apollo Server instance and optional configuration options
		expressMiddleware(server)
	);
	await new Promise<void>((resolve) =>
		httpServer.listen({ port: 8000 }, resolve)
	);
	console.log(`🚀 Server ready at http://localhost:8000/`);
}
main();
