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
- 🗓️ 5/16/2025, 5:25:28 PM — <think>
Okay, I need to come up with a joke that includes the words moon, volcano, and sandwich. Let's start by brainstorming how these elements can fit together. The moon is a celestial body, volcanoes are geological features, and a sandwich is food. Maybe a play on words or a pun?

Hmm, maybe a sandwich that's out of this world? Like an astronaut eating a sandwich on the moon. But how to involve a volcano? Oh, maybe the moon has a volcano. Wait, the moon doesn't have active volcanoes, but maybe in a joke context, we can imagine one. So, an astronaut goes to the moon, finds a volcano, and then the punchline could be about the sandwich. Maybe the volcano erupts sandwich ingredients? Or the sandwich is a type of volcano? Or the astronaut uses the sandwich to plug the volcano?

Wait, "moon volcano sandwich" – maybe a sandwich named after the moon and volcano? Or a play on "moon" and "spoon" or "volcano" and "sando" (short for sandwich in some places). Alternatively, a sandwich that's a volcanic moon? Hmm. Let's try structuring it as a one-liner. 

Why did the astronaut bring a sandwich to the moon volcano? Because he wanted a "lava"ly snack! Wait, "lava"ly – like "lovely"? Not sure. Or maybe the volcano on the moon makes sandwich-shaped eruptions? Or the moon's volcano spews sandwich ingredients. 

Wait, maybe a pun on "moon" and "spoon": "Why did the moon go to the sandwich volcano? Because it wanted to get a little 'spoon'-ful of lava!" Hmm, that's a stretch. Alternatively: "Why don't volcanoes make good sandwiches? Because they always erupt with the wrong ingredients!" Not involving the moon enough.

Another angle: "What do you call a sandwich that's been to the moon and a volcano? A 'space'cake!" Not great. Maybe "Why did the sandwich go to the moon? To visit the volcano... it heard the crust was amazing!" Because sandwiches have crust, and volcanoes are in the earth's crust. That's a bit better. Or "The moon's volcano makes the best sandwiches—every eruption is a 'crust'y' delight!" Using crust as in bread crust and earth's crust.

Wait, here's an idea: "Why did the astronaut eat a sandwich while exploring the moon's volcano? Because he needed a little 'crust' to keep the lava from rising!" Because crust can refer to both the sandwich part and the earth's crust. That might work. Let me check if all words are included: moon, volcano, sandwich. Yes. The joke uses all three. Let me structure it as a JSON object as specified. Make sure it's a single line, no markdown, just the JSON. The key is "joke" and the value is the joke string. Alright, that should do it.
</think>

{"joke": "Why did the astronaut eat a sandwich while exploring the moon's volcano? He needed a little 'crust' to keep the lava from rising!"}
- 🗓️ 5/16/2025, 4:14:41 PM — <think>
Okay, the user wants a joke using the words bicycle, volcano, and sandwich. Let me brainstorm how to connect these. Volcanoes erupt, bicycles have wheels, and sandwiches are food. Maybe something about a bicycle near a volcano and a sandwich causing an eruption. Or maybe the volcano is made of sandwich ingredients. Or a pun on "erupt" and "lunch". Let me try a setup where the volcano's eruption is related to a sandwich. Like, why did the bicycle take a sandwich to the volcano? Because it heard it was a "crust"-aceous eruption! Wait, crust from the sandwich and the volcano's eruption. Crustaceous sounds like Cretaceous, which is a geological period. That's a bit of a stretch but could work. Alternatively, maybe the bicycle wanted to avoid a meltdown by bringing a sandwich. Hmm. Or the volcano was erupting with melted cheese. Let me refine the first idea. "Why did the bicycle bring a sandwich to the volcano? It wanted to avoid a meltdown... but ended up in a crust-astrophic eruption!" No, maybe too complicated. Simplify. "Why did the bicycle take a sandwich to the volcano? It heard there was a lava-ly crust eruption!" Lava-ly (lovely) crust. That's better. Combines the sandwich's crust with the volcano's lava. Yeah, that's a punny joke. Let me check if it uses all three words correctly. Bicycle is the subject, volcano is the location, sandwich is the item. The punchline links lava (volcano) with crust (sandwich). Yep, that works. Alright, time to put it into the JSON format.
</think>



{"joke": "Why did the bicycle take a sandwich to the volcano? It heard there was a lava-ly crust eruption!"}
- 🗓️ 5/16/2025, 4:11:18 PM — <think>
Okay, the user wants a joke that includes the words sandwich, volcano, and robot. Let me brainstorm how to connect these three elements humorously.

First, I need a setup that naturally brings these words together. Maybe a robot doing something in a volcano? Volcanoes are dramatic, so maybe the robot is working there. Now, why would a robot be at a volcano? Maybe it's a job, like delivering something. Sandwiches are unexpected in a volcano, so that could be funny. 

The punchline should play on the robot's mistake. Maybe the robot misheard an order. Instead of "sandwich," perhaps it heard "lava" related. Oh, like "lava-smoked" instead of "ham-smoked." That could work. Let me structure it:

Why did the robot chef get fired from the volcano café? Because it kept serving lava-smoked sandwiches instead of ham!

Check if all three words are included. Sandwich, volcano (volcano café), robot (robot chef). The punchline uses lava as a pun on ham. It's short and fits the requirements. Seems good!
</think>



Why did the robot chef get fired from the volcano café? Because it kept serving lava-smoked sandwiches instead of ham!
<!-- JOKES_END -->
