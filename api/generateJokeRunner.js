const generateJoke = require("./generateJoke");

const userId = process.argv[2] || "workflow-user";

generateJoke(userId)
  .then(result => {
    if(result.joke) {
      console.log("Joke generated:", result.joke.joke);
    } else {
      console.log(result.message);
    }
  })
  .catch(err => {
    console.error("Error generating joke:", err);
  });
