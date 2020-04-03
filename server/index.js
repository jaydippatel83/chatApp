const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

type msgType {
    pid:Int
    message:String
    date:String
  }

  type chatMsg { 
    id: Int 
    imageUrl: String
    user: String
    messageText:[msgType]
    createdAt: String
  }  
  input msginput{ 
      pid:Int
      message:String
      date:String
  }
  
  type Query {
    chatMsgs: [chatMsg],
    chatId(id:ID!):chatMsg
  }

  type Mutation{
      addMsg(input:msginput):chatMsg
  }
 
   
`;
const chatMsgs = [
    {
        id: '1',
        imageUrl: 'https://instagram.famd3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/35001356_194081827920671_952156350731780096_n.jpg?_nc_ht=instagram.famd3-1.fna.fbcdn.net&_nc_ohc=G56h3T_ATiUAX_ioPPY&oh=fd7f1d1c30be0dbd06ec3b0918afdfc1&oe=5EAC1B98',
        user: 'jaydip patel',
        messageText: [
            {
                pid:'1',
                message: 'Maybe we can use Jim\'s studio.',
                date: 'Apr 15'
            },
            {
                pid:'1',
                message: `
                    Yeah I think it's best we do that. Otherwise things won't work well at all. 
                    I'm adding more text here to test the sizing of the speech bubble and the 
                    wrapping of it too.
                `,
                date: 'Apr 16',
            },
            {
                pid:'1',
                message: 'Okay then',
                date: 'Apr 20'
            },
            {
                pid:'1',
                message: `
                    All I know is where I live it's too hard
                    to record because of all the street noise.
                `,
                date: 'Apr 15',
            },
            {
                pid:'1',
                message: `
                    Well we need to work out sometime soon where
                    we really want to record our video course.
                `,
                date: 'Apr 15'
            },
            {
                pid:'1',
                message: `
                    I'm just in the process of finishing off the
                    last pieces of material for the course.
                `,
                date: 'Apr 15',
            },
            {
                pid:'1',
                message: 'How\'s it going?',
                date: 'Apr 13',
            },
            {
                pid:'1',
                message: ' Hey mate what\'s up?',
                date: 'Apr 13',
            },
            {
                pid:'1',
                message: 'Hey Daryl?',
                date: 'Apr 13',
            }
        ],
        createdAt: 'Oct 20'
    },
    {
        id: '2',
        imageUrl: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
        user: 'Mansi Joshi',
        messageText: [
            
            {
                pid:'2',
                message: 'Ok then',
                date: 'Apr 16', 
            },
            {
                pid:'2',
                message: 'Hello!!!!!!!!!!!!!!!!!!!!!',
                date: 'july 10'
            },
        ],
        createdAt: 'July 20',

    },
    {
        id: '3',
        imageUrl: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
        user: 'Shubhangi Ambade',
        messageText: [
            
            {
                pid:'3',
                message: 'Ok then',
                date: 'Apr 16', 
            },
            {
                pid:'3',
                message: 'How\'s it going?',
                date: 'May 2',
            },
        ],
        createdAt: 'jan 10'
    },
    {
        id: '4',
        imageUrl: 'https://www.kindpng.com/picc/m/630-6306130_avatar-avatar-male-user-icon-hd-png-download.png',
        user: 'Karan Pujara',
        messageText: [
            
            {
                pid:'4',
                message: 'Ok then',
                date: 'Apr 16', 
            },
            {
                pid:'4',
                message: `
                    I'm just in the process of finishing off the
                    last pieces of material for the course.
                `,
                date: 'Oct 15',
            },
        ],
        createdAt: '20 Feb',

    },
    {
        id: '5',
        imageUrl: 'https://www.kindpng.com/picc/m/630-6306130_avatar-avatar-male-user-icon-hd-png-download.png',
        user: 'Mitesh Jabuani',
        messageText: [
            
            {
                pid:'5',
                message: 'Ok then',
                date: 'Feb 3', 
            },
            {
                pid:'5',
                message: `
                    Yeah I think it's best we do that. Otherwise things won't work well at all. 
                    I'm adding more text here to test the sizing of the speech bubble and the 
                    wrapping of it too.
                `,
                date: 'March 4',
            },
        ],
        createdAt: 'Dec 5'
    },
    {
        id: '6',
        imageUrl: 'https://www.kindpng.com/picc/m/630-6306130_avatar-avatar-male-user-icon-hd-png-download.png',
        user: 'Rahul Singh',
        messageText: [
           
            {
                pid:'6',
                message: 'Ok then',
                date: 'Apr 16', 
            },
            {
                pid:'6',
                message: 'How\'s it going?',
                date: 'july 20',
            },
        ],
        createdAt: 'March 20',

    },
    {
        id: '7',
        imageUrl: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
        user: 'Kinjal Shah',
        messageText: [
            
            {
                pid:'7',
                message: 'Ok then',
                date: 'Apr 16', 
            },
            {
                pid:'7',
                message: ' Hey mate what\'s up?',
                date: 'jan 26',
            },
        ],
        createdAt: '25 May',

    }
];

const resolvers = {
    Query: {
        chatMsgs: () => chatMsgs,
        chatId:(root,args)=>{
            const chat=chatMsgs.find(node=>node.id == args.id)
            return chat
        }
    },
    Mutation:{
        addMsg:(root,args)=>{
            const chat=chatMsgs.find(node=>node.id == args.input.pid)
            chat.messageText.push(args.input)
            return chat
        }
    }
};

const server = new ApolloServer({
    typeDefs, resolvers, introspection: true,
    playground: true
});
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
