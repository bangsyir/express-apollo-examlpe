import { UserList as users } from "../FakeData";

type User = {
	id: Number;
	name: String;
	username: String;
	age: Number;
	nationality: String;
};

export const resolvers = {
	Query: {
		getUsers: () => {
			return users;
		},
		getUser: (parent: User, args: { id: number }) => {
			const user = users.find((u) => u.id == args.id);
			return user;
		},
	},
};
