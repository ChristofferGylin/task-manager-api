const sgMail = require('@sendgrid/mail');
const fromEmail = 'christoffer@christoffergylin.com';
sgMail.setApiKey(process.env.SENGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: fromEmail,
        subject: 'Thanks for joning in!',
        text: `Welcome to the app ${name}, let me know how you get along with the app.`
    });
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: fromEmail,
        subject: 'Account has been removed',
        text: `Sorry to see you go ${name}, we hope we will see you again!`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}