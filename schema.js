const axios = require('axios');
const chatMsgs = require('./server/index');

const { GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema
} = require('graphql');

const RootQuery = new GraphQLObjectType({
    name: 'chatMsg',
    fields:()=>({
        chatMsgs: {
            id: { type: GraphQLString },
            imageUrl: { type: GraphQLString },
            user: { type: GraphQLString },
            messageText: { type: GraphQLString },
            createdAt: { type: GraphQLString }
        },
        args: {
             id: { type: GraphQLString }
        },
    }),
});
 
module.exports = new GraphQLSchema({
    query: RootQuery
});