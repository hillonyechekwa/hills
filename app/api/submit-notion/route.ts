import {Client} from '@notionhq/client';
import {NextRequest, NextResponse} from 'next/server';

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
})


export async function POST(req: NextRequest){
    try{

    const {name, email, purpose, message} = await req.json()


    const response = await notion.pages.create({
        parent:{
            database_id: process.env.NOTION_DATABASE_ID || ''
        },
        properties: {
            Name:{
                title: [
                    {
                        text: {
                            content: name,
                        }
                    }
                ]
            },
            Email: {
                email: email,
            },
            Purpose: {
                select: {
                    name: purpose
                }
            },
            Message:{
                rich_text: [
                    {
                        text: {
                            content: message
                        }
                    }
                ]
            }
        }
    })

    return NextResponse.json({
        success: true,
        data: response
    },{
        status: 200
    })
    } catch (error) {
        console.error("Notion api error", error)
        return NextResponse.json({
            success: false,
            error: "Failed to submit to Notion"
        }, {
            status: 500
        })
    }
}