import {PubSub, GraphQLServer} from 'graphql-yoga'

import Query from './resolvers/Query.resolver'
import Subscription from './resolvers/Subscription.resolver'
import Mutation from './resolvers/Mutation.resolver'
import * as db from './db'

// Resolvers
const resolvers = {
  Query,
  Subscription,
  Mutation,
}

const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    db,
    pubsub,
  },
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
})

const options = {
  port: 3333,
  endpoint: '/graphql',
  playground: '/_',
}

server.start(options, ({port}) => {
  console.log(`Server is listening on ${port}`)
})
