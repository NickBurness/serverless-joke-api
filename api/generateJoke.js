const fs = require("fs");
const axios = require("axios");
const { getRandomWords, canGenerateJokeForUser } = require("./helpers");

const jokesPath = "api/jokes.json";  // Path to store all jokes
const jokesCachePath = "api/jokesCache.json";  // Path to store cached jokes

// Get a random joke from the jokes.json file
function getRandomJokeFromFile() {
  const jokes = JSON.parse(fs.readFileSync(jokesPath, "utf-8"));
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  return randomJoke;
}

// Function to generate a joke using Hugging Face API
async function generateJoke(userId) {
  if (!canGenerateJokeForUser(userId)) {
    console.log("Rate limited: Joke generation skipped.");
    return { message: "Rate limit exceeded. Please try again later." };
  }

  const words = getRandomWords();
  const prompt = `Create a funny joke using the words: ${words.join(", ")}`;

  try {
  const { InferenceClient } = require("@huggingface/inference");
  const HF_API_TOKEN = process.env.HF_API_TOKEN;

  const client = new InferenceClient(HF_API_TOKEN);

  const chatCompletion = await client.chatCompletion({
    provider: "novita",
    model: "deepseek-ai/DeepSeek-R1",
    messages: [
      {
        role: "user",
        content: `Tell me a funny joke using the words: ${words.join(", ")}`,
      },
    ],
  });

  const joke = chatCompletion.choices?.[0]?.message?.content?.trim();
  if (!joke) throw new Error("No joke returned from DeepSeek-R1");

  // Store the new joke in jokes.json
  const newJoke = {
    timestamp: new Date().toISOString(),
    words,
    joke,
  };

  fs.writeFileSync(jokesPath, JSON.stringify([...JSON.parse(fs.readFileSync(jokesPath)), newJoke], null, 2));
  fs.writeFileSync(jokesCachePath, JSON.stringify([newJoke], null, 2));

  console.log("Joke added successfully:", joke);
  return { joke: newJoke };

} catch (error) {
  console.error("Failed to generate joke:", error.message);
  return { message: "Sorry, there was an error generating the joke. Please try again later." };
}}

module.exports = generateJoke;