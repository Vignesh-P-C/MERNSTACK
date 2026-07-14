# CSS Hero Image Animation: Orbit & Squeeze

> **Note**
>
> I understand the concern regarding the presentation of this readme file, coming forth as generated using AI, but that is not the case. I have worked on projects before, and I keep a consistent documentation style on GitHub because I am also recording my MERN stack learning journey. For this revision, I have kept the README clear and simple, and I have added a couple of comments in the CSS file to explain the animation logic used in this assignment.

🌐 **Live Demo:** https://mernstack-6wq3.vercel.app/

## Stack

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()

## Preview

![Hero Image Animation](./task10.gif)

## About

This task builds on the hero section from the previous tasks and adds a continuous animation to the washing machine illustration. From the moment the page loads, the image drifts around in a wide, prominent circular path while expanding, contracting, and squeezing at every step along the way, kind of like a floating bubble. The loop runs infinitely for as long as the page is open, with no user interaction required to trigger it.

The assignment practices:

- `@keyframes`
- Combining `translate`, `scale`, and `rotate` inside one animation
- Using `animation-iteration-count: infinite` (via the `infinite` keyword) to keep an effect running continuously on load

## Features

- Hero image moves in a wide, eye-catching, orbit-like path automatically on page load.
- Image expands and squeezes with non-uniform scaling at every keyframe, so the bubble-wobble effect is consistent throughout the whole cycle, not just at a couple of points.
- Animation loops continuously and indefinitely — no hover or click needed.

## How to Run

1. Download or clone this folder.
2. Keep `index.html`, `style.css`, and `washingmachine.webp` in the same directory.
3. Open `index.html` in any browser.
4. The washing machine image will start orbiting and squeezing automatically as soon as the page loads.

## Project Structure

```text
.
├── index.html
├── style.css
├── washingmachine.webp
└── README.md
```

## Technologies Used

- HTML5
- CSS3

## Concepts Learned

- Writing multi-step `@keyframes` animations.
- Faking a circular motion path using `translate` offsets across keyframe steps.
- Using non-uniform `scale(x, y)` values to create squeeze/stretch effects instead of a plain uniform zoom.
- Applying an `animation` directly to an element (rather than gating it behind a pseudo-class like `:hover`) so it runs continuously from page load.