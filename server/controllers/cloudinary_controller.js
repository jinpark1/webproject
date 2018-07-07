require( "dotenv" ).config();
const cloudinary = require('cloudinary');

module.exports = {
    upload: ( req, res ) => {
        console.log("Inside server side")
        const timestamp = Math.round( ( new Date() ).getTime() / 1000 );
        const api_secret = process.env.CLOUDINARY_SECRET_API;
        const signature = cloudinary.utils.api_sign_request( { timestamp: timestamp }, api_secret );
        const payload = {
            signature: signature,
            timestamp: timestamp
        };
        console.log("payload is ", payload)
        res.json( payload );
    
    }
}



