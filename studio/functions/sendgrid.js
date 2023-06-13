const client = require('@sendgrid/mail')

function sendEmail (client, message, personalizations, subject, senderEmail, senderName) {
  return new Promise((resolve, reject) => {
    const data = {
      personalizations,
      from: {
        email: senderEmail,
        name: senderName
      },
      subject,
      html: message
    }

    client
      .send(data)
      .then(([response, body]) => {
        resolve(response)
      })
      .catch(error => reject(error))
  })
}

exports.handler = function (event = {}, context, callback) {
  const {
    SENDGRID_API_KEY = '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',
    SENDGRID_SENDER_EMAIL = 'kumbibalek@gmail.com',
    SENDGRID_SENDER_NAME = 'Ondrej Krupka'
  } = process.env

  const body = JSON.parse(event.body)

  const {
    message,
    personalizations,
    subject
  } = body
  client.setApiKey(SENDGRID_API_KEY)

  sendEmail(
    client,
    message,
    personalizations,
    subject,
    SENDGRID_SENDER_EMAIL,
    SENDGRID_SENDER_NAME
  )
    .then(response => callback(null, {statusCode: response.statusCode}))
    .catch(err => callback(err, null))
}
