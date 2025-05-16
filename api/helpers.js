const fs = require("fs");

// Get random words from words.txt
function getRandomWords() {
  const words = fs.readFileSync("api/words.txt", "utf-8").split("\n");
  return [words[Math.floor(Math.random() * words.length)], words[Math.floor(Math.random() * words.length)], words[Math.floor(Math.random() * words.length)]];
}

// Rate-limiting functions to track user requests
const userLimitFile = "api/userLimits.json"; // Tracking user limits

// Get the current user limit data
function getUserLimit(userId) {
  const userLimits = JSON.parse(fs.readFileSync(userLimitFile, "utf-8"));
  return userLimits[userId] || { count: 0, lastReset: Date.now() };
}

// Update user limit data after a joke generation attempt
function updateUserLimit(userId) {
  const userLimits = JSON.parse(fs.readFileSync(userLimitFile, "utf-8"));
  const user = userLimits[userId] || { count: 0, lastReset: Date.now() };

  // Reset daily count if a day has passed
  if (Date.now() - user.lastReset > 86400000) { // 24 hours in ms
    user.count = 0;
    user.lastReset = Date.now();
  }

  user.count += 1;
  userLimits[userId] = user;
  
  fs.writeFileSync(userLimitFile, JSON.stringify(userLimits, null, 2));
}

// Check if a user can generate a joke based on the rate limit
function canGenerateJokeForUser(userId) {
  const user = getUserLimit(userId);
  return user.count < 5; // Limit to 5 jokes per day per user
}

module.exports = { getRandomWords, canGenerateJokeForUser, updateUserLimit };