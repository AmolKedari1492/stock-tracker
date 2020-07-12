## gitrepo
https://github.com/AmolKedari1492/stock-tracker

## prodsite
http://akedari-stock-tracker.herokuapp.com/

## Techstack
React, HTML5, CSS3, SCSS, Webpack, SocketIO
## External library
React-dom, Prop-types, lodash, axios, Hichart, react-router

This project is created using CRA latest verstion.
Below is the official readme

This project includes following points
It showing historical data and live data on two different tabs, each of graph can be seen on differnt data types on OHLC
Historical data can be visible on time periodicity. Here, Data should be picked in random way, it is better to have periodicity logic on backend. Live data fetched from socket-io.client.

Project folder structure is splitted into component, service, scss, constant, utils as per need. Axios, socket and API are divided.
Component are based on their functionality. SCSS styling and responsive UI are added.

All specified API are working on local env by using proxy but on prod it is not working, tried with different methods like POSTMAN tools, no-cors, SSL, express server; didn't work. May be issue with reverse-proxy or nginx routing or no-cors is not enabled but if it get solved prod will work definitely. 

I have enabled service worker for offline but axios doesn't work well with SW so API data is cached locally. So, Historic data availble on offline mode but live data is not. SW issue tried on prod and SSL but not on HTTP2. 

### Note: To run in local env we need to remove axios baseUrl as proxy is added or above API get fixed.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
