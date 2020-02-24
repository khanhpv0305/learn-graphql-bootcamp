import {GraphQLServer} from 'graphql-yoga'

// Type definitions
const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    me: User
    greeting(name: String!, age: Int!): String!
  }
`

// Resolvers
const resolvers = {
  Query: {
    me: () => ({
      id: 1,
      name: 'Khanh Pham',
      email: 'khanh@gmail.com',
    }),
    greeting: (_, {name, age}) => {
      return `Hi ${name}, age: ${age}`
    },
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

const options = {
  port: 3333,
  endpoint: '/graphql',
  playground: '/_',
}

server.start(options, ({port}) => {
  console.log(`Server is listening on ${port}`)
})
