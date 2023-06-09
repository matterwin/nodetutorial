const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')

const sendEmailEtheral = async(req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'tom84@ethereal.email',
            pass: 'aXXYgyWmzCDBtJxNwn'
        }
    });

    let info = await transporter.sendMail({
        from:'"Coding Addict" <codingaddict@gmail.com>',
        to:"bar@example.com",
        subject:"test subj",
        text: "Hello world"
    });

    res.json(info)
}

const sendEmail = async(req,res) => {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'baseborns@gmail.com', // Change to your recipient
        from: 'matthewderwin23@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    const info = await sgMail.send(msg)
    res.json(info)
}

module.exports = sendEmail;