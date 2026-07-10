# CSS Hero Image Animation: Orbit & Squeeze

> **Note**
>
> I understand the concern regarding the presentation of this readme file, coming forth as generated using AI, but that is not the case. I have worked on projects before, and I keep a consistent documentation style on GitHub because I am also recording my MERN stack learning journey. For this revision, I have kept the README clear and simple, and I have added a couple of comments in the CSS file to explain the animation and transition logic used in this assignment.

🌐 **Live Demo:** https://mernstack-6wq3.vercel.app/

## Stack

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()

## Preview

![Hero Image Hover Animation](./task10.gif)

## About

This task builds on the hero section from the previous tasks and adds a hover animation to the washing machine illustration. On hover, the image drifts around in a loose circular path while expanding, contracting, and squeezing at different points, kind of like a floating bubble. The loop keeps repeating for as long as the cursor stays on the image. If the cursor leaves mid-loop, a `transition` on `transform` takes over and eases the image back to its resting position instead of the animation cutting off and snapping back instantly.

The assignment practices:

- `@keyframes`
- Combining `translate`, `scale`, and `rotate` inside one animation
- Letting a `transition` take over smoothly once a hover-triggered `animation` stops

## Features

- Hero image moves in a circular, orbit-like path on hover.
- Image expands, contracts, and squeezes unevenly at different points in the loop for a bubble-like wobble.
- Animation loops continuously for as long as the cursor stays on the image.
- When the cursor leaves mid-animation, the image eases back to its resting position smoothly instead of snapping, no JavaScript involved.

## How to Run

1. Download or clone this folder.
2. Keep `index.html`, `style.css`, and `washingmachine.webp` in the same directory.
3. Open `index.html` in any browser.
4. Hover over the washing machine image to see it loop, then move the cursor away to see it ease back to rest.

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
- Understanding that `animation` takes priority over `transition` when both target the same property, and using that handoff to smooth out how the animation ends.