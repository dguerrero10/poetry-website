const { connectToDatabase } = require('../../lib/mongodb');

async function poemHandler (req, res) {
    let { db } = await connectToDatabase();

    const poemTitle = req.query.poemTitle;

    if (req.method === 'GET') {
        try {
            const poem = await db.collection('poems').findOne({ 'title': poemTitle });
            return res.status(200).json({ success: true, poem: poem });
        } catch(err) {
            return res.status(500).json({error: err})
        }
    }
    return res.status(500).json({ success: false, message: 'Invalid request.' });
}

export default poemHandler