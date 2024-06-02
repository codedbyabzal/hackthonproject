const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit-order', (req, res) => {
    const selectedItems = req.body.menuItems; // Make sure the field name is correct
    const body = "Customer's Order:\n" + selectedItems.join("\n");

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aabdula@gitam.in', // Replace with your Gmail address
            pass: '9966299453' // Replace with your Gmail password
        }
    });

    const mailOptions = {
        from: 'aabdula@gitam.in', // Replace with your Gmail address
        to: 'aabdula@gitam.in', // Replace with recipient email address
        subject: 'Catering Order',
        text: body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send('Error occurred. Please try again later.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Order submitted successfully!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
