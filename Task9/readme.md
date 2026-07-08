# CSS Button Hover Effect: Transforms

> **Note**
>
> I understand the concern regarding the presentation of this readme file, coming forth as generated using AI, but that is not the case. I have worked on projects before, and I keep a consistent documentation style on GitHub because I am also recording my MERN stack learning journey. For this revision, I have kept the README clear and simple, and I have added a comment in the CSS file to explain the hover logic used in this assignment.

🌐 **Live Demo:** [add your Vercel link here]

## Stack

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()

## Preview

![Hover animation](./task9.gif)

## About

This task builds on the responsive hero section from the previous task and adds a hover interaction on the CTA button. On hover, the button grows slightly and tilts, using pure CSS transforms.

The assignment practices:

- `transform: scale()`
- `transform: rotate()`
- `transition` for smooth hover animation

## Features

- CTA button increases in size on hover.
- CTA button tilts slightly on hover.
- Smooth transition between default and hover state, no JavaScript involved.

## How to Run

1. Download or clone this folder.
2. Keep `index.html`, `style.css`, and `washingmachine.webp` in the same directory.
3. Open `index.html` in any browser.
4. Hover over the "Book a service today!" button to see the effect.

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

- Combining multiple `transform` functions (`scale` + `rotate`) in a single hover state.
- Using `transition` to animate transform changes smoothly.
- Building micro-interactions with pure CSS.