const CreateNoteMutaion = {
    type: noteType,
    args: {
        content: { type: GraphQLString }
    },
    resolve: async (_, { content }) => {
        const noteService = new noteService();
        const newNote = await noteService.createNote({ content });

        return newNote;
    }
};