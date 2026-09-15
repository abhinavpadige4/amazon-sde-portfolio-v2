# Amazon SDE Portfolio Website

A modern, responsive portfolio website for an Amazon Software Development Engineer featuring:
- Hero section with animated title
- About section with profile and bio
- AWS Skills section with logos and proficiency bars
- Projects section with 4 project cards and modals
- Timeline section for education/work experience
- Contact section with Formspree integration
- Dark theme toggle with localStorage persistence
- Accessible design (WCAG AA compliant)
- Performance optimized (LCP < 2.5s)
- SEO optimized with meta tags

## Features

- Responsive design (mobile-first approach)
- Dark/light theme toggle with persistence
- Semantic HTML with ARIA labels
- JavaScript interactivity (theme toggle, form validation, timeline animation)
- Contact form with validation and Formspree integration
- SEO meta tags
- Accessible (WCAG AA)
- Performance optimized

## File Structure

```
amazon-sde-portfolio-v2/
├── index.html
├── README.md
├── .gitignore
├── assets/
│   ├── css/
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── components.css
│   │   └── utils.css
│   ├── js/
│   │   ├── main.js
│   │   ├── theme.js
│   │   ├── form.js
│   │   └── timeline.js
│   ├── img/
│   │   ├── profile.png
│   │   ├── project1.png
│   │   ├── project2.png
│   │   ├── project3.png
│   │   └── project4.png
│   └── icons/
│       ├── aws-logo.svg
│       └── lambda.svg
└── vercel.json
```

## Deployment

This site is deployed to Vercel at: [https://amazon-sde-portfolio-v2.vercel.app](https://amazon-sde-portfolio-v2.vercel.app)

## Development

To run locally:
1. Clone the repository
2. Open `index.html` in your browser
3. No build process required - pure HTML/CSS/JS

## Credits

Built as a portfolio piece for an Amazon SDE position.