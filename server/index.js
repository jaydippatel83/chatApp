const { ApolloServer, gql } = require('apollo-server'); 

const typeDefs = gql`
  type chatMsg { 
    id: String 
    imageUrl: String
    user: String
    messageText: String
    createdAt: String
  } 
  
  type Query {
    chatMsgs: [chatMsg]
  }
 
  extend type Mutation {
    addRemoveData(id: ID!): [chatMsg]
  }
`;
const chatMsgs = [
    {
        id: '1',
        imageUrl:'https://instagram.famd3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/35001356_194081827920671_952156350731780096_n.jpg?_nc_ht=instagram.famd3-1.fna.fbcdn.net&_nc_ohc=G56h3T_ATiUAX_ioPPY&oh=fd7f1d1c30be0dbd06ec3b0918afdfc1&oe=5EAC1B98',
        user: 'jaydip patel',
        messageText: 'Ok fair enough. Well good talking to you.',
        createdAt: 'Oct 20'
    },
    {
        id: '2',
        imageUrl:'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png', 
        user: 'Mansi Joshi',
        messageText: `
            Not sure exactly yet. It will be next year sometime. Probably late.
        `,
        createdAt: 'July 20',
       
    },
    {
        id: '3',
        imageUrl:'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
        user: 'Shubhangi Ambade',
        messageText: 'Yeah I know. But oh well. So when is the big date?',
        createdAt: 'jan 10'
    },
    {
        id: '4',
        imageUrl:'https://www.kindpng.com/picc/m/630-6306130_avatar-avatar-male-user-icon-hd-png-download.png', 
        user: 'Karan Pujara',
        messageText: `
            Well I know you like doing that stuff. But honestly I think
            you are already really talented. It's a shame you haven't found
            what you are looking for yet.
        `,
        createdAt: '20 Feb',
       
    },
    {
        id: '5',
        imageUrl:'https://www.kindpng.com/picc/m/630-6306130_avatar-avatar-male-user-icon-hd-png-download.png',
        user: 'Mitesh Jabuani',
        messageText: `
            I'm doing ok. Just working on building some applications to
            bulk up my resume, so I can get a better job.
        `,
        createdAt: 'Dec 5'
    },
    {
        id: '6',
        imageUrl:'https://www.kindpng.com/picc/m/630-6306130_avatar-avatar-male-user-icon-hd-png-download.png',
        user: 'Rahul Singh',
        messageText: `
            I've just been really busy at work myself, looking to get
            married sometime next year too. How are you going?
        `,
        createdAt: 'March 20',
       
    }, 
    {
        id: '7',
        imageUrl:'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
        user: 'Kinjal Shah',
        messageText: 'Hey!!!! Have not spoken to you for a while',
        createdAt: '25 May',
       
    } 
];

const resolvers = {
    Query: {
        chatMsgs: () => chatMsgs,
    },
};

const server = new ApolloServer({ typeDefs, resolvers,introspection: true,
    playground: true });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
