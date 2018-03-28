
import {
    GraphQLType,
} from 'graphql';


export interface GraphQLQuery {
    type: GraphQLType;
    description: string;
    resolve: Function;
}