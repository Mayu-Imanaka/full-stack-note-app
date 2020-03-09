import { GraphQLObjectType } from "graphql";

const noteType = new GraphQLObjectType({
    name: 'Note',
    fields: {
        _id: { type: GraphQLID },
        content: { type: GraphQLString }
    }
});