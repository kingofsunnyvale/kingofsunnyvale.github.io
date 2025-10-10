---
layout: post
title: "I Tracked Bluesky Posts Through Embedding Space and Found Something Weird"
date: 2025-10-9 12:00:00 -0700
---

I scraped a bunch of Bluesky posts and embedded them to see how online conversations move through semantic space over time. The idea: if we can track how discourse evolves, maybe we can predict where it's heading.

## What I Built

I've got three repos for this:
- A scraper (works for about 6 hours before dying, but gets enough data)
- Clustering scripts that group posts by day (the time batching is a bit wonky)
- A Huggingface dataset with all the embedded tweets

## The Interesting Part

When I clustered the embeddings and tracked them over time, I found something cool: online discourse actually travels through embedding space in predictable patterns. 

I'm adding a visualization that shows three clusters merging together. They're all Democrat-related criticism of Trump, though I lost the original tweets so I can't tell you exactly what each cluster was talking about. But watching them converge from three separate points in space into one unified blob is pretty cool.

## Why This Matters

The fact that separate conversations gradually drift together in embedding space suggests discourse has a trajectory. It doesn't just randomly jump around. If we can model these trajectories better, we might be able to forecast narratives before they fully form.

The code's messy and the scraper keeps dying, but the core insight is there: conversations might move through semantic space in ways we can track and potentially predict. Check out the [repo](https://github.com/kingofsunnyvale/Bluesky-Discourse-Forecasting) if you want to play with it.

If people find this useful, I'll clean up the code and make it actually work properly.