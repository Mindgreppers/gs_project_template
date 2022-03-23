const KafkaRequestProducer = require('../../../../gs_service/app/eventBusHandler/eventsConfig/kafkaRequestProducer')

const helloWorld = data => {
  return {
    message: data.message,
    status: 200
  }
}
const sum = ({ a, b }) => {
  return {
    message: 'sum of a + b',
    status: 200,
    data: a + b
  }
}
const eventProducer = params => {
  const { _type, body } = params
  var missingArgumentMessage

  if (!params._type) {
    missingArgumentMessage = 'type missing'
  } else if (!params.body) {
    missingArgumentMessage = 'body missing'
  }
  if (missingArgumentMessage) {
    const err = {
      message: 'Illegal Argument Exception: ' + missingArgumentMessage,
      status: 400
    }
    return {
      type: 't-entity.error',
      data: err,
      subject: params._type
    }
  } else {
    console.log(body)
    KafkaRequestProducer({ _type, body })
  }
}

module.exports = {
  helloWorld,
  sum,
  eventProducer
}
