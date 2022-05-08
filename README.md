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

Known issues:
1. Double re-render while fetching data
2. User section dissapears and appears with repo section before and after loading repos , even user is already fetched (the con of server-side pagination).
   
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
