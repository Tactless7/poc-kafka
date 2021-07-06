const produce = require('./events-producer')

produce().catch((err) => {
	console.error('error in producer: ', err)
})