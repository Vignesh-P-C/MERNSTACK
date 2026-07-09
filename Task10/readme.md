# CSS Hero Image Animation: Orbit & Squeeze

> **Note**
>
> I understand the concern regarding the presentation of this readme file, coming forth as generated using AI, but that is not the case. I have worked on projects before, and I keep a consistent documentation style on GitHub because I am also recording my MERN stack learning journey. For this revision, I have kept the README clear and simple, and I have added a couple of comments in the CSS file to explain the animation logic used in this assignment.

🌐 **Live Demo:** [add your Vercel link here]

## Stack

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()

## Preview

![Hero Image Hover Animation](./task10.gif)

## About

This task builds on the hero section from the previous tasks and adds a hover animation to the washing machine illustration. On hover, the image drifts around in a loose circular path while expanding, contracting, and squeezing at different points, kind of like a floating bubble, then settles back to normal. The whole loop runs for about 3 seconds, done entirely with a single `@keyframes` animation.

The assignment practices:

- `@keyframes`
- Combining `translate`, `scale`, and `rotate` inside one animation
- Triggering an animation with `:hover`

## Features

- Hero image moves in a circular, orbit-like path on hover.
- Image expands, contracts, and squeezes unevenly at different points in the loop for a bubble-like wobble.
- Animation runs once per hover and settles back to the resting state, no JavaScript involved.

## How to Run

1. Download or clone this folder.
2. Keep `index.html`, `style.css`, and `washingmachine.webp` in the same directory.
3. Open `index.html` in any browser.
4. Hover over the washing machine image and let the ~3s animation play out.

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
- Triggering animations conditionally with `:hover` instead of running them on page load.