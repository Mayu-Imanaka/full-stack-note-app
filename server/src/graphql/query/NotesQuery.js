import { GraphQLList } from "graphql";

const NotesQuery = {
    type: GraphQLList(noteType),
    args: {},
    resolve: async () => {
        const noteService = new noteService();
        const notes = await noteService.getAllNotes();

        return notes;
    }
};