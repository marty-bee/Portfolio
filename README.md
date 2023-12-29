
# Portfolio
A NextJS application that allows me to put my projects in a structured and ordered way. It allows me to explain the rationale behind projects and decisions I made that are more in-depth than would be appropriate in a project README file.

<img src="/images/readmeImage.png" width="1600" alt="site screen shot">

## Features

- Project cards: Each project is showcased on the home page using a card that is generated from a data object. This makes it simple to update and add more projects
- Project pages: A full page for each project showing the tech stack, and relevant links to the steps behind creating it. 
- Contact form: Powered by Formspree to allow people to contact me without exposing my email address.
- Dark mode switch: Auto detects the user's system theme and sets the colour scheme to match. There is a drop-down allowing the user to override this to their preference.


## Installation

```bash
  npm install
```
    
## Running the project
 ```javascript
npm run dev
```

## Documentation
- To add your own project card to the home page, add or edit the objects in: 
 ```javascript
projectCardData.js
```
- If you are creating your own new project page follow the file system structure as NextJS uses that to set the urls. Then use the file:
```javascript
projectPageDataTemplate.js
```
as a guide to create a projectPageData.js for your project, this will generate the heading section including the project name, tech stack, and relevant link buttons.

## Authors
<a href="https://github.com/Mart510">
        <img src="https://github.com/Mart510.png" width="100" height="100" alt="Mart510">
</a>

