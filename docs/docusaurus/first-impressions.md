---
title: Docusaurus - First impressions
---

Why do I need to put the page title twice, once in the header and once in the Markdown? Aah, FrontMatter, we meet again! Not a big deal but lets hope things get better...

## Blogs

I was hoping to get away from needing to have the date-time in the filename.

## Styling

Overall for absolutely no effort on my part the docusaurus-generated site looks really nice.

## Navigation

Where is the navigation for the "site"? Seems odd that by default there is no nav shown on the homepage. Maybe I need to create some folders first...

## GitHub Pages

Errors on the page suggest I've not got the baseUrl configured correctly. I definitely hadn't to start with, but it should be right now but still seeing css fail to load. Fixed now with a whitespace poke at the index.html file, probably me changing the GitHub Pages configuration for this repository caused the latest code on the `gh-pages` branch to not be deployed to wherever GitHub serves static sites from. I'll chalk that one up to GitHub and not Docusaurus.

