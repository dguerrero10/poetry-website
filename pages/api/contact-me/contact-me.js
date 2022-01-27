const { connectToDatabase } = require('../../../lib/mongodb');

async function contactMeHandler(req, res) { 
    let { db } = await connectToDatabase();

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (req.method === 'POST') {
        const { email } = req.body;
        const { message } = req.body;

        if (!email.match(regexEmail) || 
            !email || 
            email.trim() === '' || 
            !message || 
            message.trim().length < 1) {
            return res.status(422).json({ message: 'Input invalid.' });
        }

        try {
            const emailExists = await db.collection('messages').findOne( {'email': email });
    
            if (emailExists) {
                return res.status(422).json({ success: false, message: 'You have already sent a message!' });
            }
    
            await db.collection('messages').insertOne({ 'email': email, 'message': message });
            return res.status(201).json({ success: true, message: 'Thank you for submitting your email!' });

        } catch (error) {
            return res.status(500).json({ success: false,  error: error })
        }
    }
    
    return res.status(500).json({ success: false, message: 'Something went wrong.' });
}

export default contactMeHandler
