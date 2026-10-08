# Interactive jQuery Gallery – Project Report

## Introduction

This project is an interactive image gallery created as part of a practical assignment. It uses HTML, CSS and jQuery to display images as thumbnails and, when clicked, to show them enlarged in a modal window (including a lightbox function).

## How it works

- **Gallery view:** pictures with CSS hover effects.
- **Modal window:** Clicking on an image opens a modal with a smooth slide animation.
- **Lightbox navigation (optional target achieved):** The gallery can be navigated directly within the modal using ‘Next’ and ‘Back’ buttons (endless loop).
- **Close:** The window closes when the close button is clicked or when the darkened background is clicked.

## jQuery methods used

To ensure interactivity, the following jQuery concepts were used:

- (`$(“.class”)`, `$(“#ID”)`):\*\* To target HTML elements specifically without having to write lengthy native JavaScript (such as `document.getElementById`).
- `.click()`:\* \* The central event handling mechanism. It intercepts user clicks on images, buttons and the background.
- `.attr(“src”)`:\*\* A very useful method for retrieving the `src` attribute (the image path) of the clicked thumbnail and dynamically inserting it into the large `<img>` tag within the modal.
- `.slideDown(400)` / `.slideUp(400)`:\*\* These were used instead of hard CSS changes (`display: none/block`) to implement the required smooth animations (duration: 400 ms).
- `.index()` and `.eq()`:\*\* These methods were crucial for the lightbox functionality. `.index()` determines the position of the currently clicked image, whilst `.eq()` loads the next or previous image from the gallery list.

## Challenges and Solutions

During development, there were two main challenges:

1. **Unintended closing of the modal (event bubbling):**

- _Problem:_ A click event on the modal window was intended to close it. However, if you clicked on the _large image itself_ (which is located within the modal), the window would also close, which is not user-friendly.
- _Solution:_ I used the `event` object within the function and included a check: `if (event.target.id === “myModal”)`. This ensures that the window only closes when the transparent background is clicked directly, rather than its child elements.

2. **Navigation beyond the end of the gallery (lightbox):**

- _Problem:_ If you clicked ‘Next’ on the last image, the script attempted to load an image that did not exist.
- _Solution:_ I implemented a `currentIndex` counter, which is synchronised with the length of the gallery (`$thumbs.length`). If the counter is too high, it is reset to `0` (the first image). If it falls below `0`, it jumps to the last image. This creates a seamless loop.

## Execution

To start the project, simply open the `index.html` file in a modern web browser. No further installation is required, as jQuery is loaded via a CDN. The JavaScript code in the `script.js` file is also extensively documented.
