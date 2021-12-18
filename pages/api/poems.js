const { connectToDatabase } = require('../../lib/mongodb');

async function poemsHandler (req, res) {
    let { db } = await connectToDatabase();

    if (req.method === 'GET') {
        try {
            const poems = await db.collection('poems').find().toArray();
            return res.status(200).json({ success: true, poems: poems });

        } catch(err) {
            return res.status(500).json({ error: err })
        }
    }

    return res.status(500).json({ success: false, message: 'Invalid request.' });
}

export default poemsHandler