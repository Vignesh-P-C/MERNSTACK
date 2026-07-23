# CSS Mini Project: Thala 7 Sneaker Store

> **Note**
>
> This README follows the same disclaimer/format I've used across my other tasks — written by me, not AI-generated, kept as part of documenting my MERN stack learning journey.

🌐 **Live Demo:** [add your Vercel link here]

## Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## Preview

![Full Website animation](./task11.gif)

## About

A single-page sneaker store built for the CSS mini project brief: landing page, product display, shopping cart, and checkout, all stacked as sections on one `index.html` and styled with one `style.css` — no Bootstrap, no JavaScript, no frameworks.

The header is `position: sticky`, so it stays pinned at the top as you scroll from section to section, which is what keeps it "the same" across the whole page instead of being rebuilt per section.

## Sections

- **Landing Page** — sticky navbar (logo left, links centered, icons right), hero split with heading/description/CTA on one side and a product image on the other, and a full-width stats bar outside the main content area
- **Product Display** — product image and details side by side (name, price with discount, quantity selector, Add to Cart), plus a horizontally scrolling image gallery
- **Shopping Cart** — item table with quantity controls and remove buttons, coupon code entry, price breakdown (subtotal/tax/discount/total), and a Continue Shopping link back to the product section
- **Payment** — checkout form with email and card/crypto/bank tabs, card detail fields, and an order summary panel matching the cart's price breakdown

## How to Run

1. Download or clone this folder.
2. Keep `index.html` and `style.css` in the same directory.
3. Open `index.html` in any browser and scroll through — Shop Now, Add to Cart, and Pay Now jump between sections via in-page anchor links.

## Project Structure

```text
.
├── index.html
├── style.css
└── README.md
```

## Technologies Used

- HTML5
- CSS3

## Concepts Learned

- Structuring a multi-section single-page layout instead of separate linked pages
- Three-part flexbox navbar (equal side sections) to get true center alignment for nav links regardless of logo/icon width
- `position: sticky` for a persistent header across scrollable sections
- In-page anchor navigation (`#id` links) as a no-JavaScript way to move between sections
- Building layout with real content shapes: product cards, cart tables, coupon/summary panels, tabbed payment method selectors
- Horizontally scrolling flex containers for image galleries (`overflow-x: auto` with fixed-width children)
- Consistent price/discount math shared between the cart and payment summary panels

## Notes

- Quantity steppers, Add to Cart, Apply Coupon, and Pay Now are visual only — no working JavaScript logic, consistent with the CSS-only approach used across the other tasks.
- The hero and product photos are hotlinked from Pexels (free to use, no attribution required). Swap the `<img>` sources in `index.html` if you'd rather use your own.