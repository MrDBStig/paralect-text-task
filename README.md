# Test task for Paralect's Startup Summer Internship

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Libraries and packages used:
- React 18 + Hooks
- SASS
- Context API
- Octokit

Features:
1. Shows loader while fetching data
2. Shows empty state if user doesn't have any repository
3. Shows empty state (error) if user doesn't exist
4. Responsive layout for 320px+ width
5. Server-side pagiantion written from scratch
6. Code is split into components
7. Utility function for trimming the number of followers and following if there are more than a 1000

Known issues:
1. Double re-render while fetching data
2. User section dissapears and appears with repo section (app shows loading spinner at that moment) before and after loading repos, even user is already fetched (the con of server-side pagination)
3. ~~Bug with the number of repository pages (sometimes it just shows a blank page on the last one)~~
   Fixed: see lines 92-97 in context.js

Yeah, I know, the app is not as ideal as it could be, but its just a test task, not the commercial project. I had so much fun writing it. 
The best thing I've found about programming is the fact that some time after you've build the application you can find yourself sitting and thinking how would you build the app now. And there is always a different approach than the one you've chosen.

P.S. I tried to follow DRY and KISS principles but now I uderstand that even such a small app requires a structure.So, if I needed to complete this task now, I would rather used Redux or at least useReducer() hook with ContextAPI. :)
   
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
