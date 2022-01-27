import { getSession } from 'next-auth/client';

const { connectToDatabase } = require('../../../lib/mongodb');

async function postPoemHandler (req, res) {
    let { db } = await connectToDatabase();

    const session = await getSession({ req: req });

    if (!session) {
        return res.status(401);
    }

    if (req.method === 'POST') {
        const { title } = req.body;
        const { content } = req.body;
        const { updatePoem } = req.body;

        if (!title.length || !content.length) {
            return res.status(500).json(
                { success: false, message: 'Something went wrong. Please double check that all fields have values.' }
            );
        }
        
        if (updatePoem) {
            try {
                const query = { 'title': title };
                const update = {
                    "$set": {
                      "content": content,
                      "poemUpdated": true 
                    }
                  };

                const options = { returnNewDocument: false };
                const updatedPoem = await db.collection('poems').findOneAndUpdate(query, update, options);

                if (updatedPoem.value === null)  {
                    return res.status(500).json({success: false, message: 'Could not find a poem with that title!'});
                }
            
                return res.status(200).json({success: true, message: 'Poem updated successfully'});

            } catch (err) {
                return res.status(500).json({ error: err });
            }
        }

        else {
            try {
                let doesPoemExist = await db.collection('poems').findOne({ 'title': title });
    
                if (doesPoemExist) {
                    return res.status(500).json({success: false, message: 'A poem already has that title!'})
                }
    
                await db.collection('poems').insertOne({ 'title': title, 'content': content });
                return res.status(200).json({ success: true, message: `'${title}' added successfully.`});
    
            } catch(error) {
                return res.status(500).json({ error: error });
            }
        }
    }

    return res.status(500).json({ success: false, message: 'Something went wrong.' });
}

export default postPoemHandler