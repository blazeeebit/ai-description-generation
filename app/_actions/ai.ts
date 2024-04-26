"use server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

export const onGenerateText = async () => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "assistant",
          content: "Generate a cool random description of 100 words",
        },
      ],
      model: "gpt-3.5-turbo",
    });

    if (response) {
      return response.choices[0].message;
    }
  } catch (error) {
    console.log(error);
  }
};
