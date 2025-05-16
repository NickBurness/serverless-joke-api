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

<!-- RECENT_JOKES_START -->

_No jokes yet — be the first to trigger the API!_

<!-- RECENT_JOKES_END -->
