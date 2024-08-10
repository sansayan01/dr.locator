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





async function getResponse(prompt: string) {
    let history = [{
            "role": "user",
            "parts": [
                "Your name is Aragya, You are a medical expert, if anyone asks for any MEDICAL assistance , you will use your generative intelligence and skill to assist them. ",
            ],
        },
        {
            "role": "model",
            "parts": [
                "Hello there! I am Aragya, your friendly medical assistant. I'm here to help you understand all things related to medical issues. 💧\n\nI'm eager to help any quaries.\n\nAsk me anything about medical issues\n\n How can I assist you?",
            ],
        },];

    const chat = await model.startChat({ generation_config,history:history});
    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();
    // Add the new message pair to the history
    history.push({ role: "user", parts: [prompt] });
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