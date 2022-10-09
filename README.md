# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<h1>GitHub Pages</h1>
Note: this feature is available with react-scripts@0.2.0 and higher.
<br>
<br>

<h5>Step 1: Add homepage to package.json
The step below is important!

If you skip it, your app will not deploy correctly.

Open your package.json and add a homepage field for your project:

  "homepage": "https://myusername.github.io/my-app",
or for a GitHub user page:

  "homepage": "https://myusername.github.io",
or for a custom domain page:

  "homepage": "https://mywebsite.com",
Create React App uses the homepage field to determine the root URL in the built HTML file.
<br>
<br>

Step 2: Install gh-pages and add deploy to scripts in package.json
Now, whenever you run npm run build, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at https://myusername.github.io/my-app, run:

npm install --save gh-pages
Alternatively you may use yarn:

yarn add gh-pages
Add the following scripts in your package.json:<br>

  "scripts": {
+   "predeploy": "npm run build",<br>
+   "deploy": "gh-pages -d build",<br>
    "start": "react-scripts start",<br>
    "build": "react-scripts build",<br>
The predeploy script will run automatically before deploy is run.

If you are deploying to a GitHub user page instead of a project page you'll need to make one additional modification:

Tweak your package.json scripts to push deployments to master:<br>
  "scripts": {
    "predeploy": "npm run build",<br>
-   "deploy": "gh-pages -d build",<br>
+   "deploy": "gh-pages -b master -d build",
<br>
<br>
Step 3: Deploy the site by running npm run deploy
Then run:
npm run deploy
<br>
<br>
Step 4: For a project page, ensure your project’s settings use gh-pages
Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch:
gh-pages branch setting
<br>
<br>
Step 5: Optionally, configure the domain
You can configure a custom domain with GitHub Pages by adding a CNAME file to the public/ folder.

Your CNAME file should look like this:</h5>
<h4>
For Example
mywebsite.com
</h4>
