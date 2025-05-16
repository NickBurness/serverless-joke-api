const fs = require("fs");
const path = require("path");

const jokesFilePath = path.join(__dirname, "jokes.json");

//  read of jokes.json with fallback to empty array
let jokes = [];
try {
  const fileContent = fs.readFileSync(jokesFilePath, "utf-8");
  jokes = JSON.parse(fileContent || "[]");
} catch (err) {
  console.warn("Could not parse jokes.json, using empty list.");
  jokes = [];
}

// Sort by newest first
jokes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

// Take last 5
const latest = jokes.slice(0, 5);

// Format for README
const markdown = latest
  .map(j => `- 🗓️ ${new Date(j.timestamp).toLocaleString()} — ${j.joke}`)
  .join("\n");

// Load the README
// const readmePath = path.resolve(process.cwd(), "README.md");
const readme = fs.readFileSync("/home/runner/work/serverless-joke-api/serverless-joke-api/README.md", "utf-8");

// Replace the placeholder section
const newReadme = readme.replace(
  /<!-- JOKES_START -->[\s\S]*?<!-- JOKES_END -->/,
  `<!-- JOKES_START -->\n${markdown}\n<!-- JOKES_END -->`
);

// Write it back
fs.writeFileSync(readmePath, newReadme, "utf-8");