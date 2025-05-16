const fs = require("fs");

const jokes = JSON.parse(fs.readFileSync("api/jokes.json", "utf-8"));
const readmePath = "README.md";

// Get last 5 jokes (most recent last)
const latestJokes = jokes.slice(-5).reverse();

const jokeLines = latestJokes.map(joke => {
  return `- **${new Date(joke.timestamp).toLocaleString()}**: ${joke.joke}`;
}).join("\n");

// Replace section in README.md
let readme = fs.readFileSync(readmePath, "utf-8");

const newSection = `<!-- RECENT_JOKES_START -->\n${jokeLines}\n<!-- RECENT_JOKES_END -->`;
const updatedReadme = readme.replace(
  /<!-- RECENT_JOKES_START -->([\s\S]*?)<!-- RECENT_JOKES_END -->/,
  newSection
);

fs.writeFileSync(readmePath, updatedReadme);
console.log("README updated with latest jokes.");