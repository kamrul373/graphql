const {ApolloServer} = require("apollo-server")
const {typeDefs} = require("./schema/type")
const {resolvers} = require ("./schema/resolvers")


const server = new ApolloServer({typeDefs, resolvers})
server.listen().then((url) => {
	console.log("server is running", url)
})