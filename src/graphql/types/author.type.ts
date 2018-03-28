import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt
} from 'graphql';

import { AuthorEntity } from '../../author'

class Author {

    public name = "Author";
    public description = "This represent an author";

    public fields = function () {

        return {

            id: {
                type: new GraphQLNonNull(GraphQLInt),
            },
            name: {
                type: GraphQLString,
                resolve: function (author: AuthorEntity) {
                    return author.firstName + " " + author.lastName
                }
            },
            firstName: {
                type: GraphQLString
            },
            lastName: {
                type: GraphQLString
            }
        }

    }

}

export const AuthorType = new GraphQLObjectType(new Author());