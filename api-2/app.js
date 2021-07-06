const consume = require("./events-consumer")

consume().catch((err) => {
	console.error("error in consumer-api: ", err)
})