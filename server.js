const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

app.post('/submit-order', (req, res) => {
    const orderDetails = req.body;
    console.log('Received order:', orderDetails);

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'your-email@gmail.com', // Send confirmation to your email
        subject: 'New Order',
        text: `New order received!\n\nDetails:\n${JSON.stringify(orderDetails, null, 2)}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Order received and email sent');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
