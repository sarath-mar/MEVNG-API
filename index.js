const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
type Query{
    name:String
}`

const resolvers = {
    Query: {
        name: () => {
           return 'Sarath mullanarambath' 
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})
server.listen({ port: 5000 }).then(res => {
    console.log(`server is running at ${res.url}`);
})
