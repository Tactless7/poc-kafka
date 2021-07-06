const { Kafka } = require('kafkajs');

const clientId = 'gateway';
const topic = 'emails';
const brokers = ['localhost:9092'];

const kafka = new Kafka({ clientId, brokers });
const consumer = kafka.consumer({ groupId: clientId })

const consume = async () => {
	await consumer.connect()
	await consumer.subscribe({ topic })
	await consumer.run({
		eachMessage: ({ message }) => {
			console.log(`I receive the message: ${message.value}`)
		},
	})
}

module.exports = consume