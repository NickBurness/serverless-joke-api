const { InferenceClient } = require("@huggingface/inference");

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

  try {
  const words = getRandomWords();
  const prompt = `You are a joke bot. Only output a JSON object like this:
                  {"JOKE": "Here goes the joke using all words."}
                  Do not add commentary or explanation.
                  Now, write a joke based upon these words: ${words.join(", ")}.
                  Only respond with the JSON object.`;

  const client = new InferenceClient(process.env.HF_API_TOKEN);

  const chatCompletion = await client.chatCompletion({
    provider: "hf-inference",
    model: "Qwen/Qwen3-235B-A22B",
    messages: [
        {
            role: "user",
            content: prompt,
        },
    ],
  });

  const joke = chatCompletion.choices?.[0]?.message?.content?.trim();

  // Extract joke from response using regex
  const jokeMatch = rawResponse.match(/JOKE:\s*(.*)/i);
  const jokePart = jokeMatch ? jokeMatch[1].trim() : rawResponse.trim();

  if (!joke) throw new Error("No joke returned from LLM");

  // Store the new joke in jokes.json
  const newJoke = {
    timestamp: new Date().toISOString(),
    words,
    jokePart,
  };

  fs.writeFileSync(jokesPath, JSON.stringify([...JSON.parse(fs.readFileSync(jokesPath)), newJoke], null, 2));
  fs.writeFileSync(jokesCachePath, JSON.stringify([newJoke], null, 2));

  console.log("Joke added successfully:", jokePart);
  return { joke: newJoke };

} catch (error) {
  console.error("Failed to generate joke:", error.message);
  return { message: "Sorry, there was an error generating the joke. Please try again later." };
}}

module.exports = generateJoke;