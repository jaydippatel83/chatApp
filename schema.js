const axios = require('axios');
const chatMsgs = require('./server/index');

const { GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLInt,
    GraphQLList
} = require('graphql');

const RootQuery = new GraphQLObjectType({
    name: 'chatMsg',
    fields:()=>({
        chatMsgs: {
            id: { type: GraphQLInt },
            imageUrl: { type: GraphQLString },
            user: { type: GraphQLString },
            messageText:{
                type: new GraphQLList(msgType)
            },
            createdAt: { type: GraphQLString }
        },
        args: {
             id: { type: GraphQLInt }
        },
    }),
});

const msgType = new GraphQLObjectType({
    name: 'msg',
    fields: () => ({
      pid:{type:GraphQLInt},
      message: { type: GraphQLString },
      date: { type: GraphQLString }
    })
  })
  
 
module.exports = new GraphQLSchema({
    query: RootQuery
});