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
- 🗓️ 5/16/2025, 4:04:59 PM — <think>
Okay, the user wants a funny joke using the words sandwich, bicycle, and volcano. Let me think about how to connect these three elements in a humorous way. Volcanoes are big and erupt, bicycles have wheels, and sandwiches are food. Maybe create a scenario where they interact.

First, I need a setup. Perhaps a character doing something with a bicycle and a sandwich near a volcano. Maybe the volcano is active. Then a punchline that ties them together. Wordplay could help here. For example, playing on "erupt" with a sandwich ingredient. Maybe the volcano erupts with melted cheese instead of lava, making a grilled cheese sandwich. The bicycle could be used to escape, but the punchline is about the sandwich part. Let me structure it.

Why did the sandwich ride a bicycle to the volcano? Because it heard the eruption came with a "melted cheese" warning and wanted to make a quick getaway... but ended up as a toasted panini!

Wait, does that work? The sandwich is riding the bike to the volcano because of the melted cheese warning (like a weather warning), but then the heat from the volcano toasts it into a panini. The humor comes from the pun on "melted cheese warning" sounding like "melted cheese" from a grilled sandwich, and the transformation into a panini. The bicycle is part of the setup for the getaway, but the punchline is the outcome. Maybe check if the flow is smooth and if the pun is clear. Also, make sure the three words are all included. Sandwich, bicycle, volcano—yes, all there. I think that works. Maybe tweak the wording for clarity and timing.
</think>



Why did the sandwich ride its bicycle to the volcano?  

It heard the eruption came with a *melted cheese* advisory and wanted to grill the perfect panini!  

But halfway there, it realized… maybe pedaling toward lava wasn’t the *toast* of genius ideas. 🚴♂️🌋🥪
<!-- JOKES_END -->
