const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'somya.kec@gmail.com',
        pass: 'Somya@236!',
    }
})

var mailOption = {
    from: 'somya.kec@gmail.com',
    to: 'somya.nalco@hotmail.com',
    subject: 'Helloo NodeMailer',
    text: 'Are you ok!!'
}

transporter.sendMail(mailOption, (err, info) => {
    if(err) {
        console.log(err);
    }

    else {
        console.log('Email send ' + info.response)
    }
})