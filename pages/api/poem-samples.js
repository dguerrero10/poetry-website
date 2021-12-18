const { connectToDatabase } = require('../../lib/mongodb');

import { htmlContentParser } from  '../../helpers/htmlContentParser';

async function poemSampleHandler (req, res) {
    let { db } = await connectToDatabase();

    if (req.method === 'GET') {
        try {
            const poems = await db.collection('poems').aggregate([{ $sample: { size: 1 } }]).toArray();

            let poemSamples = [];

            poems.forEach(poem => {
                let parsedContent = htmlContentParser(poem.content).trim() + '...';
                poemSamples.push({title: poem.title, sample: parsedContent});
            });

            return res.status(200).json({ success: true, poemSamples: poemSamples });

        } catch(err) {
            return res.status(500).json({ error: err })
        }
    }

    return res.status(500).json({ success: false, message: 'Invalid request.' });
}

export default poemSampleHandler