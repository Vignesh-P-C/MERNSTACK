# CSS Hero Section: Display, Position & Float

🌐 **Live Demo:** _https://your-deployment-url.vercel.app/_

## Stack

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()

## Preview

![CSS Hero Section Task](./task5.png)

## About

A CSS practice task focused on display modes, positioning, and layout without flexbox. It features a full-viewport laundry service landing page — a navbar with left/right anchored elements and a two-column hero section — built entirely with HTML and CSS using `display: inline`, `position`, and viewport units throughout.

## Features

- Navbar layout using `display: inline` on list items and anchors, with `position: absolute` for left/right anchoring of Logo and Username
- Two-column hero using `display: inline-block` and the `font-size: 0` whitespace-gap fix
- Viewport units (`100vw`, `10vh`, `90vh`) to fit the entire page on screen with zero scroll
- `vertical-align: middle` for cross-axis alignment between the two hero columns
- Dark theme with a subtle `border-bottom` navbar separator
- Hover transitions on nav links and the CTA button using `transition`

## Project Structure

```text
.
├── index.html
└── style.css
```

## Technologies Used

- HTML5
- CSS3