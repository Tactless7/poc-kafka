const { Kafka } = require("kafkajs");

const clientId = "gateway";
const brokers = ["localhost:9092"];
const topic = "emails";

const kafka = new Kafka({ clientId, brokers });
const producer = kafka.producer();

const produce = async () => {
  await producer.connect();
  let i = 0;

  setInterval(async () => {
    try {
      await producer.send({
        topic,
        messages: [
          {
            key: String(i),
            value: `Email number ${i}`,
          },
        ],
      });

      console.log("writes: ", i);
      i++;
    } catch (err) {
      console.error("could not write message " + err);
    }
  }, 6000);
};

module.exports = produce;
