import { GraphQLObjectType, GraphQLSchema } from "graphql";

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        notes: NotesQuery
    })
});

const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        createNote: CreateNoteMutation,
        deleteNote: DeleteNoteMutation,
        updateNote: UpdateNoteMutaion
    })
});

const schema = new GraphQLSchema({ query: QueryType, mutation: MutationType });