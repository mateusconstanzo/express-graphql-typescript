import {
    GraphQLType,
    GraphQLList,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString
} from 'graphql';

import { getCustomRepository } from "typeorm";

import { AuthorType } from '../types'
import { AuthorRepository } from '../../author'


export interface GraphQLMutation {
    type: GraphQLType;
    description: string;
    resolve: Function;
}

interface Arguments {
    firstName: string
    lastName: string
}

export class SaveAuthorMutation implements GraphQLMutation {

    public type = AuthorType;
    public description: "Authors";

    public args = {
        firstName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        lastName: {
            type: new GraphQLNonNull(GraphQLString)
        }
    };

    public resolve = async function (root, args: Arguments) {

        return await getCustomRepository(AuthorRepository).createAndSave(args.firstName, args.lastName);

    }

}