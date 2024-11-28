const {Client} = require('@notionhq/client');


const notion = new Client({
    auth: process.env.NOTION_API_KEY,
})


export default async function handler(req, res){
    if(req.method !== 'POST') {
        return res
            .status(400)
            .json({message: `${req.method} requests are not allowed`})
    }
    try{
        const {name, email, purpose, message} = req.body = JSON.parse(req.body);
        await notion.pages.create({
            parent: {
                database_id: process.env.NOTION_DATABSE_ID
            },
            properties: {
                Name: {
                    title: [
                        {
                            text: {
                                content: name
                            }
                        }
                    ]
                },
                Email: {
                    email: email
                },
                Purpose: {
                    select: {
                        name: purpose,
                    }
                },
                Message: {
                    rich_text: [
                        {
                            text: {
                                content: message
                            }
                        }
                    ]
                }
            }
        });
        res.status(201).json({msg: 'Success'})
    }catch(error){
        res.status(500).json({msg: "There was an error"})
        console.error(error)
    }
}