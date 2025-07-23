---
title: Thoughts on Tailwind
date: 2025-7-23
author: Rohith Saravana
slug: thoughts-on-tailwind
category: Web Development
tags: [SvelteKit, JavaScript, Blog, tailwind, css]
published: true
description: Discussing tailwind.
---

I used tailwindcss along with Sveltekit for building this website. Overall, I was surpisingly happy with the results.

When I first learned about Tailwind, I was skeptical for two reasons. First, I was concerned about the syntax. Unlike vanilla CSS, tailwind is done inline with your HTML and is not separated. I thought the result would be messy and the lack of separation of concerns would ruin the organization of my project. While tailwind can admittedly be an eyesore, it makes editing styling a lot easier. With vanilla CSS, I constantly have to figure out which class I want to edit, then switch back and forth between HTML and CSS until I make the right changes. The code looks cleaner, but can be more difficult to navigate. With tailwind, I simply go to the HTML element I want to edit, then change the styling there. I imagine for bigger projects tailwind might get a little too messy, but this project was pretty small so it was manageable. Also there are vscode extensions for hiding the tailwind styling to make your code look cleaner.

I also was not sure about the look of tailwind. I think styling and UI libraries, while convenient, can be generic and boring. I really want my website to be creative and have personality. A library like Bootstrap is a great way to quickly make your website look modern and readable, but your website will look like a Bootstrap website. However, this isn't the case with tailwind. While tailwind offers presets and abstracts over CSS, it is still "low-level" enough for full styling customization. I think tailwind is good middle ground between customization and simplicity.