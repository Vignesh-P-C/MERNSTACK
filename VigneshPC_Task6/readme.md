# CSS Login Page: Flexbox

🌐 **Live Demo:** _https://mernstack-v1ld.vercel.app/_

## Stack

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()

## Preview

![CSS Flexbox Login Page Task](./task6.png)

## About

A CSS practice task focused on Flexbox layout. It features a full-viewport split-screen login page for Laundry Mart — a cyan illustration panel on the left and a dark login form on the right — built entirely with HTML and CSS using Flexbox for all layout and centering.

## Features

- Split-screen layout using `display: flex` on a `100vh` container, with each panel as `flex: 1`
- Flexbox centering (`justify-content: center` + `align-items: center`) used in place of margin or padding hacks
- Form stacked with `flex-direction: column` and `gap` for consistent spacing between fields
- `align-self: flex-end` to right-align the Forgot Password link within the column
- Styled inputs with `:focus` border highlight and `::placeholder` colour control
- Cyan accent colour (`#00c2cb`) carried consistently across the left panel, button, links, and focus states
- Hover transitions on the Login button and Register link

## Project Structure

```text
.
├── index.html
└── style.css
```

## Technologies Used

- HTML5
- CSS3