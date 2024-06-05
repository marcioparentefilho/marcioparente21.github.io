// src/openaiService.js
import axios from 'axios';

const apiKey = 'YOUR_OPENAI_API_KEY';  // Replace with your OpenAI API key

const openai = axios.create({
    baseURL: 'https://api.openai.com/v1/engines/davinci-codex/completions',  // Use the appropriate endpoint for GPT-4
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
    },
});

export const getCasePrompt = async (details) => {
    const prompt = `Generate a consulting case. ${details}`;
    try {
        const response = await openai.post('', {
            prompt: prompt,
            max_tokens: 150,  // Adjust the max tokens as needed
        });
        return response.data.choices[0].text;
    } catch (error) {
        console.error('Error fetching completion:', error);
        throw error;
    }
};

export const getFollowUp = async (conversation) => {
    try {
        const response = await openai.post('', {
            prompt: conversation,
            max_tokens: 150,  // Adjust the max tokens as needed
        });
        return response.data.choices[0].text;
    } catch (error) {
        console.error('Error fetching completion:', error);
        throw error;
    }
};
