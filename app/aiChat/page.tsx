"use client";

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";



const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;

export default function AiChat() {

    const router = useRouter()


    const [chatHistory, setChatHistory] = useState<{ prompt: string; response: string }[]>([]);
    const [prompt, setPrompt] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function runChat(prompt: string) {
        setIsLoading(true);

        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        const generationConfig = {
            temperature: 0.9,
            topK: 1,
            topP: 1,
            maxOutputTokens: 2048,
        };

        const safetySettings = [
            {
                category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
        ];

        const chat = await model.startChat({
            generationConfig,
            safetySettings,
        });

        const result = await chat.sendMessage(prompt);
        const response = await result.response.text();

        setChatHistory((prev) => [
            ...prev,
            { prompt, response },
        ]);
        setIsLoading(false);
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (prompt.trim() === "") {
            toast.error('Please enter a prompt to proceed.', {
                duration: 4000,
                position: 'top-center',
                style: {
                    background: 'linear-gradient(to right, #6e6e6e, #4e4e4e, #2e2e2e)',
                    color: '#ffffff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid #4e4e4e', // Match the button's border color
                },
            });
            return;
        }
        await runChat(prompt);
        setPrompt("");
    };

    const formatResponse = (response: string) => {
        // Regular expressions to match text within ** tags and ``` code blocks
        const boldRegex = /\*\*(.*?)\*\*/g;
        const codeBlockRegex = /```([\s\S]*?)```/g;

        // Initialize an array to hold formatted elements
        const formattedElements: JSX.Element[] = [];

        // Start index of the last match
        let lastIndex = 0;

        // Iterate over all matches of code blocks
        let match;
        while ((match = codeBlockRegex.exec(response)) !== null) {
            // Add text before the current code block
            if (lastIndex < match.index) {
                const nonCodeText = response.substring(lastIndex, match.index);
                const boldText = nonCodeText.split(boldRegex).map((part, i) =>
                    i % 2 === 1 ? <strong key={i} className="block">{part}</strong> : part
                );
                formattedElements.push(<p key={formattedElements.length} className="text-gray-400 mb-2">{boldText}</p>);
            }

            // Add the code block with blue color
            const codeContent = match[1];
            const boldCodeContent = codeContent.split(boldRegex).map((part, i) =>
                i % 2 === 1 ? <strong key={i} className="block text-blue-500">{part}</strong> : part
            );
            formattedElements.push(
                <pre key={formattedElements.length} className="bg-white p-4 rounded mb-2">
                    <code className="text-blue-500">{boldCodeContent}</code>
                </pre>
            );

            // Update the index of the last match
            lastIndex = codeBlockRegex.lastIndex;
        }

        // Add any remaining text after the last code block

        if (lastIndex < response.length) {
            const remainingText = response.substring(lastIndex);
            const boldText = remainingText.split(boldRegex).map((part, i) =>
            <>
                {i % 2 === 1
                    ? <strong key={i} className="block">{part}</strong>
                    : part
                }
                {" "}
            </>
            );
            formattedElements.push(<p key={formattedElements.length} className="text-gray-400 mb-2">{boldText}</p>);
        }

        return formattedElements;
    };





    return (
        <main className="relative flex flex-col min-h-screen items-center text-white px-5 w-full md:px-10 lg:px-20">



            <div className="sticky top-0 bg-black z-10 w-full pb-2 flex flex-col items-center justify-center pt-5">

                <div className="absolute top-7 left-0 flex items-center cursor-pointer z-20" onClick={() => router.push('/')}>
                    <IoMdArrowRoundBack className="text-2xl text-gray-300 " />
                    <p className="ml-2 text-lg text-gray-300 font-medium hidden md:flex">Back</p>
                </div>


                <h1 className="text-4xl font-bold mb-2">Chat with AI</h1>

                <form onSubmit={onSubmit} className="flex flex-col items-center justify-center gap-4 w-full max-w-md rounded-lg shadow-md">
                    <label htmlFor="prompt" className="text-gray-300">
                        What can I help you with today?
                    </label>
                    <input
                        type="text"
                        id="prompt"
                        placeholder="Ask me anything!"
                        name="prompt"
                        className="border w-full border-gray-300 rounded-lg p-4 text-black focus:outline-none"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-gray-800 w-full text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-900"
                    >
                        {isLoading ? "Generating..." : "Generate"}
                    </button>
                </form>

                {chatHistory.length > 0 && <h2 className="text-2xl font-bold pt-2">Chat History</h2>}


            </div>



            {chatHistory.length > 0 && (
                <div className="mt-4 w-full rounded-lg shadow-md px-2 h-full" >
                    <div className="flex flex-col-reverse gap-1 h-full">
                        {chatHistory.map((message, index) => (
                            <div
                                key={index}
                                className="p-2 h-full"
                            >
                                <p className="text-gray-200">
                                    <strong>You : </strong>
                                    {message.prompt}
                                </p>
                                <div className="text-gray-200">
                                    <strong>AI : </strong>
                                    {formatResponse(message.response)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}