const {users} = require("./data");
const resolvers = {
	Query : {
		users () {
			return users
		}
	}
}
module.exports = {resolvers}