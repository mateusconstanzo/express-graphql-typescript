import {
    GraphQLType,
    GraphQLList,
} from 'graphql';

import { getCustomRepository } from "typeorm";

import { GraphQLQuery } from './abstract.query'
import { AuthorType } from '../types'
import { AuthorRepository } from '../../author'


export class AuthorsQuery implements GraphQLQuery {

    public type = new GraphQLList(AuthorType);

    public description: "List of all Authors";

    public resolve = async function () {

        return await getCustomRepository(AuthorRepository).find();

    }    

}