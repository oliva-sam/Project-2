var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "thefourmeatheads@gmail.com",
        pass: "The4m34theads"
      }
  });

var message = {
  from: '',
  to: '',
  subject: '',
  text: ''
};

transport.sendMail(message, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

// module.exports = transport;