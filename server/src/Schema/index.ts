import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from './Mutations/User';
import { GET_ALL_USERS } from './Queries/User';
import { GraphQLObjectType, GraphQLSchema } from "graphql";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS
  }
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updatePassword: UPDATE_PASSWORD
  }
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});