import { GoogleGenerativeAI } from "@google/generative-ai";
import { json, type RequestHandler } from "@sveltejs/kit";

const genAI = new GoogleGenerativeAI(`${import.meta.env.VITE_API_KEY}`);
const generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",generationConfig:generation_config });




let history = [];

async function getResponse(prompt: string) {
    const chat = await model.startChat({ history: history });
    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();
    // Add the new message pair to the history
    history.push({ role: "user", parts: prompt });
    history.push({ role: "model", parts: text });
  
    // console.log(text);
    return text;
}

export const POST: RequestHandler = async ({ request }) => {
    try {
        const formData = await request.formData();
        const message = formData.get('message');

        if (typeof message !== 'string') {
            return json({ error: 'Invalid message format' }, { status: 400 });
        }

        const response = await getResponse(message);

        return json({ response });
    } catch (error) {
        console.error('Error processing request:', error);
        return json({ error: 'Internal server error' }, { status: 500 });
    }
};