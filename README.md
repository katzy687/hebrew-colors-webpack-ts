Hebrew Colors - Angular 1.6 components + Typescript
-------------------------------------------------------
Hebrew Learning Pod Vocabulary and Matching Game remake

To get started, clone repo, npm install, npm start (Launches Webpack Dev Server on port 8080)

Alternatively:
Run `webpack -w` and `lite-server` in adjacent terminal
(more consistent live-reloading from my experience)

Folder Structure
----------------
- Component TS,HTML, and SCSS files grouped together in folders
- UI Router state components in 'views' folder - routing logic written in app module file
- 'Presentational' components in components folder
- 'Smart' components that communicate with services in the containers folder
- Common Presentational components and SCSS stylesheets in common folder

Technologies Used
------------
- Angular 1.6 (component style architecture)
- Angular Material Design Framework
- UI-Router
- Typescript tooling
- SCSS stylesheets
- Webpack 2 for transpilation and bundling
- Ng-animate + animate.css for carousel animations
