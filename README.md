# System Overview

This is a serverless joke generation API that:

- Uses Hugging Face’s API to generate jokes based on 3 random words.
- Stores jokes in a jokes.json file, which builds over time.
- Returns jokes via a GET endpoint (static file hosted on GitHub Pages).
- Handles rate limits gracefully: if Hugging Face API returns 429, it serves a random stored joke instead.
- Uses GitHub Actions to run serverless workflows for joke generation.
- Updates this README.md with the 5 most recently added jokes.
- Rate-limits per day based on a simple tracking system.
- Supports manual and scheduled execution of the joke workflow.

## Latest Jokes

<!-- JOKES_START -->
- 🗓️ 5/16/2025, 4:11:18 PM — <think>
Okay, the user wants a joke that includes the words sandwich, volcano, and robot. Let me brainstorm how to connect these three elements humorously.

First, I need a setup that naturally brings these words together. Maybe a robot doing something in a volcano? Volcanoes are dramatic, so maybe the robot is working there. Now, why would a robot be at a volcano? Maybe it's a job, like delivering something. Sandwiches are unexpected in a volcano, so that could be funny. 

The punchline should play on the robot's mistake. Maybe the robot misheard an order. Instead of "sandwich," perhaps it heard "lava" related. Oh, like "lava-smoked" instead of "ham-smoked." That could work. Let me structure it:

Why did the robot chef get fired from the volcano café? Because it kept serving lava-smoked sandwiches instead of ham!

Check if all three words are included. Sandwich, volcano (volcano café), robot (robot chef). The punchline uses lava as a pun on ham. It's short and fits the requirements. Seems good!
</think>



Why did the robot chef get fired from the volcano café? Because it kept serving lava-smoked sandwiches instead of ham!
<!-- JOKES_END -->
