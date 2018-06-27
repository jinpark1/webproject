require( "dotenv" ).config();
const nodemailer = require( 'nodemailer' );


module.exports ={

    sendMail: (req, res) => {
        const { name, email, text } = req.body;

        let transporter = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.email.EMAIL, // generated ethereal user
                pass: process.env.email.PASSWORD // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: process.env.emailNode.EMAIL, // sender address
            to: process.env.email.EMAIL, // list of recei'vers
            subject: 'From Forums Website', // Subject line
            text: 'Message', //in text body
            html: `<div>
                        ${message}
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