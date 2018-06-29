require( "dotenv" ).config();
const nodemailer = require( 'nodemailer' );


module.exports ={

    sendMail: (req, res) => {
        const { name, email, text } = req.body;
        console.log(req.body)
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.ADMIN_EMAIL, // generated ethereal user
                // user: process.env.emailNode_EMAIL, // generated ethereal user
                pass: process.env.ADMIN_PASSWORD // generated ethereal password
                // pass: process.env.emailNode_PASSWORD // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: process.env.ADMIN_EMAIL, // sender address
            to: process.env.ADMIN_EMAIL, // list of recei'vers
            subject: 'From Forums Website', // Subject line
            text: 'Message', //in text body
            html: `<div>
                        ${text}
                    </div>` // html body
        }

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    }   
}