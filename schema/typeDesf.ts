export const typeDefs = `#graphql 
	type User {
		id: ID!
		name: String
		username: String
		age: Int
		nationality: String
	}
	# Query
	type Query {
		getUsers: [User]
		getUser(id: ID!): User
	}
`;
