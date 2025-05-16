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

// Get safe repo root path in all environments
const repoRoot = process.env.GITHUB_WORKSPACE || path.resolve(__dirname, "..");

const readmePath = path.join(repoRoot, "readme.md");
const jokesPath = path.join(repoRoot, "api", "jokes.json");

try {
  const readme = fs.readFileSync(readmePath, "utf-8");
  const jokesRaw = fs.readFileSync(jokesPath, "utf-8");
  const jokes = JSON.parse(jokesRaw || "[]");

  // Sort and get latest 5
  jokes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  const latest = jokes.slice(0, 5);
  const markdown = latest
    .map(j => `- 🗓️ ${new Date(j.timestamp).toLocaleString()} — ${j.joke}`)
    .join("\n");

// Replace the placeholder section
const newReadme = readme.replace(
    /<!-- JOKES_START -->[\s\S]*?<!-- JOKES_END -->/,
    `<!-- JOKES_START -->\n${markdown}\n<!-- JOKES_END -->`
    );

    // Write it back
    fs.writeFileSync(readmePath, newReadme, "utf-8");

    console.log("✅ README updated with latest jokes!");
} catch (error) {
  console.error("❌ Failed to update README:", error.message);
  process.exit(1);
}