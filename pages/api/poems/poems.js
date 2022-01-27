const { connectToDatabase } = require('../../../lib/mongodb');

async function poemsHandler (req, res) {
    let { db } = await connectToDatabase();

    if (req.method === 'GET') {
        try {
            const poems = await db.collection('poems').find().toArray();
            return res.status(200).json({ success: true, 'poems': poems });

        } catch(error) {
            return res.status(500).json({ error: error })
        }
    }

    if (req.method === 'DELETE') {
        try {
            let { title } = req.body;
            await db.collection('poems').deleteOne({ 'title': title });
            const poems = await db.collection('poems').find().toArray();
            return res.status(200).json({ success: true, 
                                          poems: poems, 
                                          message: `'${title}' deleted successfully.` });

        } catch(error) {
            return res.status(500).json({ success: false, error: error })
        }
    }

    return res.status(500).json({ success: false, message: 'Something went wrong.' });
}

export default poemsHandler