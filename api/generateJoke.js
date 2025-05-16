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
    // Attempt to call Hugging Face API for joke generation
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/gpt2",
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    const joke = response.data[0]?.generated_text?.trim();
    console.log(joke);
    if (!joke) throw new Error("No joke returned");

    // Store the new joke in jokes.json
    const newJoke = {
      timestamp: new Date().toISOString(),
      words,
      joke,
    };

    // Update the jokes cache and json file
    fs.writeFileSync(jokesPath, JSON.stringify([...JSON.parse(fs.readFileSync(jokesPath)), newJoke], null, 2));
    fs.writeFileSync(jokesCachePath, JSON.stringify([newJoke], null, 2));

    console.log("Joke added successfully:", joke);

    return { joke: newJoke };
  } catch (error) {
    // If Hugging Face returns a 429, fallback to random joke
    if (error.response && error.response.status === 429) {
      console.log("Hugging Face API rate-limited (429). Returning random joke.");
      return { joke: getRandomJokeFromFile() };
    }

    console.error("Failed to generate joke:", error.message);
    return { message: "Sorry, there was an error generating the joke. Please try again later." };
  }
}

module.exports = generateJoke;