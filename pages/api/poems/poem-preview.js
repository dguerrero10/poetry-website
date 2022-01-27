const { connectToDatabase } = require('../../../lib/mongodb');

async function poemPreviewHandler (req, res) {
    let { db } = await connectToDatabase();

    if (req.method === 'GET') {
        try {
            const poems = await db.collection('poems').aggregate([{ $sample: { size: 3 } }]).toArray();
            return res.status(200).json({ success: true, poems: poems });

        } catch(error) {
            return res.status(500).json({ error: error })
        }
    }

    return res.status(500).json({ success: false, message: 'Something went wrong.' });
}

export default poemPreviewHandler