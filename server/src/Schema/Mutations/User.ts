import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { Users } from "../../Entities/Users";
import { MessageType } from "../TypeDefs/Messages";
import { UserType } from "../TypeDefs/User";

export const CREATE_USER = {
  type: UserType,
  args: {
    name: {type: GraphQLString},
    username: {type: GraphQLString},
    password: {type: GraphQLString}
  },
  async resolve(parent: any, args: any) {
    const { name, username, password } = args;
    await Users.insert({name, username, password});
    return args
  }
}

export const DELETE_USER = {
  type: MessageType,
  args: {
    id: {type: GraphQLID},
  },
  async resolve(parent: any, args: any) {
    const { id } = args;
    await Users.delete(id);
    return {successful: true, message: "Delete Worked!!"}
  }
}

export const UPDATE_PASSWORD = {
  type: MessageType,
  args: {
    username: {type: GraphQLString},
    newPassword: {type: GraphQLString},
    oldPassword: {type: GraphQLString}
  },
  async resolve(parent: any, args: any) {
    const { username, newPassword, oldPassword } = args;
    const user = await Users.findOne({username});
    if(!user) {
      throw new Error("username does not match!!")
    }
    const userPass = user?.password;
    if(userPass === oldPassword) {
      await Users.update(
        {username},
        {password: newPassword}
      );
      return {successful: true, message: "Password updated!!"}
    } else {
      throw new Error('Passwords do not match!!')
    }
  }
}