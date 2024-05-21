# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Responsive design using CSS Flexbox
- HTML semantics for better accessibility
- Form validation using JavaScript:
  - Validates email format
  - Ensures password meets criteria
  - Checks that name is not empty

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

- **Form Validation**: I learned how to implement form validation using JavaScript. This includes validating email format using regular expressions, ensuring passwords meet certain criteria (such as length and character requirements), and checking that the name field is not left empty.
- **HTML Semantics**: I gained a deeper understanding of using semantic HTML elements to create a more accessible and readable structure for web pages.
- **CSS Flexbox**: I improved my skills with CSS Flexbox to create responsive and flexible layouts that adapt well to different screen sizes.
- **Relative Font Size**: I learned how to use relative units for font sizes to ensure better scalability and responsiveness across different devices and screen resolutions.

```css
body {
  width: 100%;
  min-height: 100dvh;
  background: url(images/bg-intro-desktop.png);
  background-size: 70%;
  background-color: var(--Red);
  font-family: "Poppins", sans-serif;
}
```

```js
submitBtn.addEventListener("click", function (e) {
  if (!checkValidEmail() && !checkValidNames() && !checkValidPassword()) {
    e.preventDefault();
  }
});
```

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

In future development, I plan to:

- Add more complex logic to the form validation process, such as checking for common password patterns and improving error messages.
- Focus on optimizing JavaScript code for better performance and maintainability.
- Enhance the CSS to create more visually appealing and user-friendly designs.
- Explore advanced CSS techniques to further improve responsiveness and accessibility.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Udemy Webdevlopment](https://www.udemy.com/share/101W9C3@2s1lShiGH32a3OJHMYullps9bvMmvxO_kykXK5ZGloqkGQDHawnryvbZtrMeQ8y81A==/)

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Mitesh Panchal](https://miteshp98.github.io/portfolio-website/)
- Frontend Mentor - [@miteshp98](https://www.frontendmentor.io/profile/miteshp98)
- Linkedin - [@Mitesh Panchal](https://www.linkedin.com/in/mitesh-panchal-356558126/)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Thanks to the challenge provider for creating this opportunity to apply and improve my frontend development skills.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
