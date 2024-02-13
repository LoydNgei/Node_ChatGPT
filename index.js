import { Configuration, OpenAIApi } from 'openai';

import dotenv from 'dotenv';
dotenv.config();


const configuration = new Confidential({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

async function main() {
    const chatCompletion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messagees: [
            { role: 'user', content:'what is the capital of Massachusetts' },
        ],
    });

    console.log(chatCompletion);
}

main();