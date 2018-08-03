---
title: "Portfolio Website"
client: "Mike Thariath"
path: "/mt-portfolio"
date: "2018-07-12T17:12:33.962Z"
order: "2"
link: "https://thariath.com"
source: "https://www.github.com/mthariath/portfolio"
scope: ["Everything!"]
technology:
  ["css", "javascript", "react", "gatsby", "graph", "netlify", "analytics"]
image: "./mt-portfolio.png"
---

## Project Overview

I wanted my website website to be more than a repository for projects - I wanted it to be a reflection of my capabilities and personality. <!-- end -->I designed and developed the website with no templates or CSS frameworks, using React and Gatsby to generate the site.

## Design

<img src="mt-portfolio-mockup.png" alt="Portfolio Home Page Mockup">
<image-caption>An early mockup of the home page created in Gravit Designer.</image-caption>

As a Linux user, I don't have ready access to standard design applications like Sketch or Affinity. Since I didn't have to worry about collaboration, I designed the website using paper and open source software, primarily Gravit Designer. While not as full-featured as some alternatives, it was easy enough to sketch out interface ideas and get coding.

## Stack

This was my first project with Gatsby, and my first production project with React. Nonetheless, I decided to use this stack for a few reasons:

1. All the benefits of static site generators (faster than querying databases at runtime, no worrying about servers.)
2. Gatsby is _so_ fast, because of its automatic implementation of the <a href="https://developers.google.com/web/fundamentals/performance/prpl-pattern/" target="_blank">PRPL pattern</a>&mdash;including lazy-loading images, inlining of critical CSS, code splitting, responsive image sets, and much more&mdash;all out of the box!
3. I love the declarative nature of React for creating interactive user interfaces.
4. Using Netlify CMS I can add content on the fly without opening a code editor.
5. I get to use GraphQL in production!

I also decided to use the beta version of Gatsby (v2) to use features from React 16.4, like the context API (for the color changing background) and portals (for the modal you're reading this in now.)

I'm overall very happy with my choice, and look forward to building more projects with this stack in the future.

## Deployment

I chose Netlify as a host instead of Github pages or a traditional host to take advantage of Netlify's baked in CI/CD capabilities with Github integration. It not only makes future changes incredibly hands-free, it also forced me to incorporate _real_ version control into my workflow with Git branches, pull requests, etc. so I don't accidentally break the live site. I also plan on integrating Netlify's CMS into the workflow, to add content on the fly.

## Summary

I'm blown away by this workflow. Gatsby is incredibly fun and easy to work with, and I plan on using it on many more projects&mdash;it's appropriate for most brochure-type websites and can even handle e-commerce and other data-driven websites.
