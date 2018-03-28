
import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';

import {
    AuthorsQuery
} from './queries'

import {
    SaveAuthorMutation
} from './mutations'


class Query {

    public name = "BlogAppSchema";
    public description = "Blog Application Schema Query Root";

    public fields = function () {

        return {

            authors: new AuthorsQuery()

        }

    }

}

class Mutation {

    public name = "mutation";
    public description = "";

    public fields = function () {

        return {

            saveAuthor: new SaveAuthorMutation()

        }

    }

}

export const schema = new GraphQLSchema({

    query: new GraphQLObjectType(new Query()),

    mutation: new GraphQLObjectType(new Mutation())

});