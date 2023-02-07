const {gql} = require("apollo-server")

const typeDefs = gql`
	type Users{
		id: ID,
		name : String,
		username : String,
		age : Int,
		nationality : String,
		friends: [Users]
	}

	type Query {
		users : [Users]
	}
`

module.exports = {typeDefs}